import { applyPlugins } from "#app";
import { defineStore } from "pinia";
import api from "./SERVER";

export const SITE_AUTH = defineStore('user-auth', {
    state: () => ({
        isLoggedIn: false,
        user: {
            name: '',
            email: '',
            phone: 0,
            sessionToken: '',
            status: false
        },

    }),
    actions: {
        loginUser(mailAddress, password) { /* LOGIN USER WITH EMAIL AND PASSWORD */
            api.account.createSession(mailAddress, password)
            .then(response => {
                console.log(response);
                this.isLoggedIn = true;

                SITE_ACTIONS().updateAlert(true,'You have been successfully logged in');
                SITE_ACTIONS().$patch({ alert: { alert: true} });

                api.account.getSession('current')
                .then(response => {
                    console.log(response);
                    this.user.sessionToken = response.$id;

                    api.account.get()
                    .then(response => {
                        this.user.name = response.name;
                        this.user.email = response.email;
                        this.user.status = response.emailVerification;

                        SITE_ACTIONS().updateAlert(true,'Retrieved necessary user data');
                    })
                    .catch(err => {
                        console.log(err);
                        console.log(String(err).substring(24));
                        SITE_ACTIONS().updateAlert(false, `Error Validating: ${String(err).substring(24)}`);
                        SITE_ACTIONS().toggleAlert()
                    })
                })
                .catch(err => {
                    console.log(err);
                    console.log(String(err).substring(24));
                    SITE_ACTIONS().updateAlert(false, `Error Validating: ${String(err).substring(24)}`);
                    SITE_ACTIONS().toggleAlert()
                })
            })
            .catch(err => {
                console.log(err);
                console.log(String(err).substring(24));
                SITE_ACTIONS().updateAlert(false, `Error Validating: ${String(err).substring(24)}`);
                SITE_ACTIONS().toggleAlert()
            });
        },

        register(mailAddress, password, name) { /* CREATE NEW USER ACCOUNT AND LOGIN WITH LOGINUSER() */
            api.account.create('unique()', mailAddress, password, name)
            .then(response => {
                console.log(response);

                SITE_ACTIONS().updateAlert(true,'Account has been successfully created');
                SITE_ACTIONS().toggleAlert();

                this.loginUser(mailAddress, password)
            }).catch(err => {
                console.log(err);
                console.log(String(err).substring(24));
                SITE_ACTIONS().updateAlert(false, err);
                SITE_ACTIONS().toggleAlert();
            });
        },

        logOut() {
            api.account.deleteSession('current')
            .then(() => {
                this.$reset()
            })
        }
    },
    persist: true
})