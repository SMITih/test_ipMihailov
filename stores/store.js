import { defineStore } from 'pinia'

export const useItems = defineStore('items', {
    state: () => {
        return {
            appInfo: {
                leftItems: [
                    {
                        "id": 1,
                        "name": "Shoes 1"
                    },
                    {
                        "id": 2,
                        "name": "Shoes 2"
                    },
                    {
                        "id": 3,
                        "name": "Shoes 3"
                    },
                    {
                        "id": 4,
                        "name": "Shoes 4"
                    },
                    {
                        "id": 5,
                        "name": "T-shirt 1"
                    },
                    {
                        "id": 6,
                        "name": "T-shirt 2"
                    },
                    {
                        "id": 7,
                        "name": "T-shirt 3"
                    },
                    {
                        "id": 8,
                        "name": "T-shirt 4"
                    }
                ],
                rightItems: [
                    {
                        "id": 11,
                        "name": "Jacket 1"
                    },
                    {
                        "id": 12,
                        "name": "Jacket 2"
                    },
                    {
                        "id": 13,
                        "name": "Jacket 3"
                    },
                    {
                        "id": 14,
                        "name": "Jacket 4"
                    },
                    {
                        "id": 15,
                        "name": "Hoodie 1"
                    },
                    {
                        "id": 16,
                        "name": "Hoodie 2"
                    },
                    {
                        "id": 17,
                        "name": "Hoodie 3"
                    },
                    {
                        "id": 18,
                        "name": "Hoodie 4"
                    }
                ],
                selectLeftItems: [],
                selectRightItem: [],
                count: 0,
                status: false
            }
        }
    },
    actions: {
        add(id,type) {
            if (type === 'right') {
                this.appInfo.rightItems.map((x) => {
                    if(x?.id === id) {
                        this.appInfo.selectRightItem[0] = x
                    }
                });
            }
            else {
                if(this.appInfo.selectLeftItems.length < 6) {
                    let avail = false;
                    for (let i = 0; i < this.appInfo.selectLeftItems?.length; i++) {
                        if (this.appInfo.selectLeftItems[i].id === id) {
                            avail = true;
                        }
                    }
                    if(!avail) {
                        this.appInfo.leftItems.map((x) => {
                            if(x?.id === id) {
                                this.appInfo.selectLeftItems.push(x);
                                this.appInfo.count++
                                this.appInfo.status = this.appInfo.count === 6;
                            }
                        });
                    }
                } else {
                    this.appInfo.status = true
                }
            }
        },
        deleteItem() {
            this.appInfo.selectRightItem.splice(0, this.appInfo.selectRightItem.length)
        },
        deleteLeftList(id) {
            let avail = false;
            for (let i = 0; i < this.appInfo.selectLeftItems?.length; i++) {
                if (this.appInfo.selectLeftItems[i].id === id) {
                    avail = true;
                }
            }
            if(avail) {
                for (let i = 0; i < this.appInfo.selectLeftItems.length; i++) {
                    if(id === this.appInfo.selectLeftItems[i].id) {
                        this.appInfo.selectLeftItems.splice(i, 1);
                        this.appInfo.count = this.appInfo.count-1
                        this.appInfo.status = this.appInfo.count === 6;
                        break;
                    }
                }
            }
        },
    }
})
