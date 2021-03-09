import { createStore } from "vuex";

export default createStore({
    state: {
        accounts: [
            {
                id: 1,
                name: "Зарплата",
                money: 1000,
                currentAccount: true,
                costs: {
                    categories: [
                        {
                            id: 12312,
                            name: 'Продукты',
                            value: 0,
                            select: 'cost'
                        }
                    ]
                },
                income: {
                    categories: [
                        {
                            id: 1231112312,
                            name: 'Продукты',
                            value: 0,
                            select: 'income'
                        }
                    ]
                }
            }
        ],
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
        }
    },
    actions: {
        addAccount({ commit }, newItem) {
            commit('pushItemToState', newItem)
            commit('switchAccount', newItem.id)
        },

        addCategory({ getters, commit }, categoryItem) {
            let currentCategories

            if (categoryItem.select === 'cost') {
                currentCategories = getters.costCaregories
            }else {
                currentCategories = getters.incomeCaregories
            }
            let categoryIndex = currentCategories.findIndex(item => item.id === categoryItem.id)

            if (categoryIndex !== -1) {
                commit('editCategory', { currentCategories, categoryItem, categoryIndex })
            } else {
                commit('addCategoryItem', { currentCategories, categoryItem })
            }
        },

        deleteCategory({ getters, commit }, category) {

            let categories
            if (category.select === 'cost') {
                categories = getters.costCaregories
            }else {
                categories = getters.incomeCaregories
            }

            const categoryIndex = categories.findIndex(item => item.id === category.id)
            const isDeleted = confirm("Вы действительно хотите удалить категорию ?")

            if (isDeleted) {
                commit('deleteCategoryItem', { categories, categoryIndex })
            }
        },
        changeValue({ getters, commit }, calculation) {
            
            let categories
            if (calculation.select === 'cost') {
                categories = getters.costCaregories
            }else {
                categories = getters.incomeCaregories
            }

            let categoryIndex = categories.findIndex(item => item.id === calculation.categoryID)
            let newValue = eval(calculation.value)

            commit('changeCategoryValue', { categories, categoryIndex, newValue })
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

        currentAccountCosts(state) {
            return state.accounts
                .find(element => element.currentAccount === true)
                .costs
        },

        costCaregories(state) {
            return state.accounts
                .find(element => element.currentAccount === true)
                .costs
                .categories
        },

        incomeCaregories(state) {
            return state.accounts
                .find(element => element.currentAccount === true)
                .income
                .categories
        },

        totalCost(state) {
            let result = 0
            let categories = state.accounts
                .find(element => element.currentAccount === true)
                .costs.categories

            for (const category of categories) {
                result += category.value
            }

            return result
        },

        totalIncome(state) {
            let result = 0
            let categories = state.accounts
                .find(element => element.currentAccount === true)
                .income.categories

            for (const category of categories) {
                result += category.value
            }

            return result
        },

        totalCash(state) {
            let result = state.accounts
                .find(element => element.currentAccount === true).money

            let costCategories = state.accounts
                .find(element => element.currentAccount === true)
                .costs.categories

            let incomeCategories = state.accounts
                .find(element => element.currentAccount === true)
                .income.categories

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
