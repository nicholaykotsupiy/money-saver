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
                        }
                    ]
                },
                income: {
                    categories: [
                        {
                            id: 12312,
                            name: 'Продукты',
                            value: 0,
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
            let currentCategories = getters.costCaregories

            commit('addCategoryItem', { currentCategories, categoryItem })
        },

        deleteCategory({ getters, commit }, categoryID) {
            const categories = getters.costCaregories
            const categoryIndex = categories.findIndex(item => item.id === categoryID)
            const isDeleted = confirm("Вы действительно хотите удалить категорию ?")

            if (isDeleted) {
                commit('deleteCategoryItem', { categories, categoryIndex })
            }
        },
        changeValueCost({ getters, commit }, calculation) {
            const categories = getters.costCaregories
            const categoryIndex = categories.findIndex(item => item.id === calculation.categoryID)
            const newValue = eval(calculation.value)

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

        totalCost(state) {
            let result = 0
            let categories = state.accounts
                .find(element => element.currentAccount === true)
                .costs.categories

            for (let i = 0; i < categories.length; i++) {
                result += categories[i].value
            }

            return result
        }
    }
});
