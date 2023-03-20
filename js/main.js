const DateTime = luxon.DateTime
const { createApp } = Vue

    createApp({
        data() {
            return {
                date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
                activeChat: 0,
                activeFriend: "",
                newText:"",
                answerClock: "",
                friendChat: 'friend_active',
                search: "",
                lastMessage: [],
                contacts: [
                    {
                        name: 'Michele',
                        avatar: './img/avatar_1.jpg',
                        visible: true,
                        menu: false,
                        messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received',
                                menu: false
                                }
                            ],
                    },
                    {
                        name: 'Fabio',
                        avatar: './img/avatar_2.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received',
                                menu: false
                                },
                                {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent',
                                menu: false
                                }
                            ],
                    },
                    {
                        name: 'Samuele',
                        avatar: './img/avatar_3.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received',
                                menu: false
                                },
                                {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received',
                                menu: false
                                }
                            ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: './img/avatar_4.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received',
                                menu: false
                                }
                            ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: './img/avatar_5.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received',
                                menu: false
                                }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: './img/avatar_5.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent',
                                menu: false
                                }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: './img/avatar_7.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received',
                                menu: false
                                }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: './img/avatar_8.jpg',
                        visible: true,
                        messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent',
                                menu: false
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received',
                                menu: false
                                }
                        ],
                    }
                ]
        }
    },
    methods: {
        clickChat (index) {
            
            this.contacts[index].messages.push(this.activeFriend)
            this.activeFriend = this.contacts[index].messages;
            this.activeChat = index;
        },
        textPush () {
            const newTextObject = {
                date: '10/01/2020',
                message: this.newText,
                status: 'sent',
                menu: false
            }
            this.answerClock = setTimeout(this.autoAnswer, 1000)
            this.activeFriend.push(newTextObject);
            this.newText = "";
        
        },
        autoAnswer () {
            const newAnswerObject = {
                date: '10/01/2020',
                message: 'ok',
                status: 'received',
                menu: false
            }
            this.activeFriend.push(newAnswerObject);

        },
        searchBarFriends () {
            
            for (let i = 0; i <= this.contacts.length - 1; i++) {
            
                if (this.contacts[i].name.includes(this.search)) {
                    this.contacts[i].visible = true;
                } else {
                    this.contacts[i].visible = false;
                }
            
            }
            

        },
        messageMenu (index) {
        
            if (this.activeFriend[index].menu == false) {
                this.activeFriend[index].menu = true;
            } else {
                this.activeFriend[index].menu = false;
            }
            console.log(this.activeFriend);
            
        },
        eraseMessage (index) {
            this.activeFriend.splice(index, 1);
        
        },
        getLastMessage (element) {

            const messages = element.messages;
            return messages[messages.length -1].message; 
        },


    },
}).mount('#app')