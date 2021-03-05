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
                            value: 50,
                        },
                        {
                            id: 12312,
                            name: 'Продукты',
                            value: 50,
                        },
                        {
                            id: 12312,
                            name: 'Продукты',
                            value: 50,
                        }
                    ],
                    costValue: 50
                },
                income: {}
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
        }
    },
    actions: {
        addAccount({ commit }, newItem) {
            commit('pushItemToState', newItem)
            commit('switchAccount', newItem.id)
        }
    },
    getters: {
        getAccounts(state) {
            return state.accounts;
        },

        getCurrentAccount(state) {
            return state.accounts
                .find(element => element.currentAccount === true)
        },

        getCurrentAccountCosts(state) {
            return state.accounts
                .find(element => element.currentAccount === true)
                .costs
        }
    }
});
