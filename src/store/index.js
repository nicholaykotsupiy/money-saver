import { createStore } from "vuex";

export default createStore({
    state: {
        accounts: JSON.parse(localStorage.getItem('accounts')) || [],
    },
    mutations: {
        switchAccount(state, itemID) {
            state.accounts.map(element => {
                if (element.id === itemID) {
                    element.currentAccount = true;
                } else {
                    element.currentAccount = false;
                }
            });
        },
        pushItemToState(state, newItem) {
            state.accounts.push(newItem)
        },
        addCategoryItem(_, payload) {
            payload.currentCategories
                .push(payload.categoryItem)
        },
        editCategory(_, payload) {
            payload.currentCategories
                .splice(payload.categoryIndex, 1, payload.categoryItem)
        },
        deleteCategoryItem(_, payload) {
            payload.categories
                .splice(payload.categoryIndex, 1)
        },
        changeCategoryValue(_, payload) {
            payload.categories[payload.categoryIndex].value += payload.newValue
        },
        setAccountToStorage(state) {
            localStorage.setItem('accounts', JSON.stringify(state.accounts))
        }
    },
    actions: {
        addAccount({ commit }, newItem) {
            commit('pushItemToState', newItem)
            commit('switchAccount', newItem.id)
            commit('setAccountToStorage')
        },
        addCategory({ getters, commit }, categoryItem) {
            let currentCategories

            if (categoryItem.select === 'cost') {
                currentCategories = getters.costCaregories
            } else {
                currentCategories = getters.incomeCaregories
            }
            let categoryIndex = currentCategories.findIndex(item => item.id === categoryItem.id)

            if (categoryIndex !== -1) {
                commit('editCategory', { currentCategories, categoryItem, categoryIndex })
            } else {
                commit('addCategoryItem', { currentCategories, categoryItem })
            }

            commit('setAccountToStorage')
        },
        deleteCategory({ getters, commit }, category) {

            let categories
            if (category.select === 'cost') {
                categories = getters.costCaregories
            } else {
                categories = getters.incomeCaregories
            }

            const categoryIndex = categories.findIndex(item => item.id === category.id)
            const isDeleted = confirm("Вы действительно хотите удалить категорию ?")

            if (isDeleted) {
                commit('deleteCategoryItem', { categories, categoryIndex })
            }

            commit('setAccountToStorage')
        },
        changeValue({ getters, commit }, calculation) {

            let categories
            if (calculation.select === 'cost') {
                categories = getters.costCaregories
            } else {
                categories = getters.incomeCaregories
            }

            let categoryIndex = categories.findIndex(item => item.id === calculation.categoryID)
            let newValue = eval(calculation.value)

            commit('changeCategoryValue', { categories, categoryIndex, newValue })
            commit('setAccountToStorage')
        }
    },
    getters: {
        accounts(state) {
            return state.accounts;
        },

        currentAccount(state) {
            return state.accounts
                .find(element => element.currentAccount === true)
        },

        currentAccountCosts(state, getters) {
            return getters.currentAccount.costs
        },

        costCaregories(state, getters) {
            return getters.currentAccountCosts.categories
        },

        incomeCaregories(state, getters) {
            return getters.currentAccount.income.categories
        },

        totalCost(state, getters) {
            let result = 0

            for (const category of getters.costCaregories) {
                result += category.value
            }

            return result
        },

        totalIncome(state, getters) {
            let result = 0

            for (const category of getters.incomeCaregories) {
                result += category.value
            }

            return result
        },

        totalCash(state, getters) {
            let result = getters.currentAccount.money
            let costCategories = getters.costCaregories
            let incomeCategories = getters.incomeCaregories

            for (const category of costCategories) {
                result -= category.value
            }

            for (const category of incomeCategories) {
                result += category.value
            }

            return result
        }
    }
});
