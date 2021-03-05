import { createStore } from "vuex";

export default createStore({
    state: {
        accounts: []
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
            return state.accounts.find(element => element.currentAccount === true);
        }
    }
});
