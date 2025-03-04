onload = () => {
    const MENU = {
        "sections": [
            {
                "name": "ચરોતરનો ચટપટો સ્વાદ",
                "items": [
                    {
                        "name": "રોસ્ટેડ પાપડ",
                        "price": "15"
                    },
                    {
                        "name": "ફ્રાય પાપડ",
                        "price": "20"
                    },
                    {
                        "name": "મસાલા પાપડ",
                        "price": "30"
                    },
                    {
                        "name": "ચીઝ મસાલા પાપડ",
                        "price": "45"
                    },
                    {
                        "name": "છાસ",
                        "price": "20"
                    },
                    {
                        "name": "ઘી-ગોળ",
                        "price": "40"
                    }
                ]
            },
            {
                "name": "ખીચડીનો ખજાનો",
                "items": [
                    {
                        "name": "સાદી ખીચડી કઢી",
                        "price": "70"
                    },
                    {
                        "name": "મસાલા ખીચડી કઢી",
                        "price": "90"
                    },
                    {
                        "name": "ચીઝ ગાર્લીક ખીચડી",
                        "price": "80"
                    },
                    {
                        "name": "પ્લેન રાઈસ",
                        "price": "70"
                    },
                    {
                        "name": "જીરા રાઈસ",
                        "price": "80"
                    },
                    {
                        "name": "દાલ ફ્રાય",
                        "price": "70"
                    },
                    {
                        "name": "દાલ ફ્રાય તડકા",
                        "price": "80"
                    }
                ]
            },
            {
                "name": "જૈન વાનગીઓ",
                "items": [
                    {
                        "name": "સેવ ટમેટા",
                        "price": "75"
                    },
                    {
                        "name": "દહીં તીખારી",
                        "price": "60"
                    },
                    {
                        "name": "મિક્સ વેજ",
                        "price": "80"
                    },
                    {
                        "name": "કાજુ કારેલા",
                        "price": "110"
                    },
                    {
                        "name": "પાપડ કારેલા",
                        "price": "90"
                    },
                    {
                        "name": "કાજુ મસાલા",
                        "price": "170"
                    },
                    {
                        "name": "ચીઝ બટર મસાલા",
                        "price": "170"
                    },
                    {
                        "name": "પનીર લજાવાબ",
                        "price": "140"
                    },
                    {
                        "name": "પ્લેન ખીચડી",
                        "price": "40"
                    },
                    {
                        "name": "કઢી",
                        "price": "30"
                    }
                ]
            },
            {
                "name": "રોટલા રોટલી",
                "items": [
                    {
                        "name": "સાદી રોટલી",
                        "price": "8"
                    },
                    {
                        "name": "બટર રોટલી",
                        "price": "10"
                    },
                    {
                        "name": "સાદો બાજરી રોટલો",
                        "price": "25"
                    },
                    {
                        "name": "ઘી બાજરી રોટલો",
                        "price": "30"
                    },
                    {
                        "name": "સાદો મકાઈ રોટલો",
                        "price": "25"
                    },
                    {
                        "name": "ઘી મકાઈ રોટલો",
                        "price": "30"
                    },
                    {
                        "name": "રોટલાનુ ચુરમુ",
                        "price": "80"
                    },
                    {
                        "name": "વાઘરેલો ડ્રાય રોટલો",
                        "price": "70"
                    },
                    {
                        "name": "વાઘરેલો ગ્રેવી રોટલો",
                        "price": "80"
                    },
                    {
                        "name": "પરોઠા",
                        "price": "20"
                    },
                    {
                        "name": "બટર પરોઠા",
                        "price": "30"
                    }
                ]
            },
            {
                "name": "પંજાબી તડકા",
                "items": [
                    {
                        "name": "સ્પે. દાલ મખાની તડકા",
                        "price": "110"
                    },
                    {
                        "name": "સ્પે. દાલ મખાની",
                        "price": "100"
                    },
                    {
                        "name": "પનીર લજાવાબ",
                        "price": "140"
                    },
                    {
                        "name": "ચીઝ બટર મસાલા",
                        "price": "170"
                    },
                    {
                        "name": "પાલક પનીર",
                        "price": "130"
                    },
                    {
                        "name": "ચીઝ પનીર બટર મસાલા",
                        "price": "160"
                    },
                    {
                        "name": "પનીર તુફાની",
                        "price": "160"
                    },
                    {
                        "name": "પનીર ટીક્કા મસાલા",
                        "price": "160"
                    },
                    {
                        "name": "પનીર અંગારા",
                        "price": "180"
                    },
                    {
                        "name": "પનીર હાંડી",
                        "price": "170"
                    },
                    {
                        "name": "કાજુ મસાલા",
                        "price": "170"
                    },
                    {
                        "name": "કાજુ કરી",
                        "price": "160"
                    },
                    {
                        "name": "ડાંકાવાલા ગ્રીન & રેડ",
                        "price": "200"
                    }
                ]
            },
            {
                "name": "કાઠિયાવાડી કહુંબો",
                "items": [
                    {
                        "name": "ભરેલા રીંગણ",
                        "price": "80"
                    },
                    {
                        "name": "લસણીયા બટેકા",
                        "price": "80"
                    },
                    {
                        "name": "સેવ ટમેટા",
                        "price": "75"
                    },
                    {
                        "name": "મિક્સ વેજ",
                        "price": "80"
                    },
                    {
                        "name": "દહીં તીખારી",
                        "price": "60"
                    },
                    {
                        "name": "દેશી ચણામસાલા",
                        "price": "80"
                    },
                    {
                        "name": "કાજુ ગાંઠિયા",
                        "price": "120"
                    },
                    {
                        "name": "રીંગણ નુ ભરથુ",
                        "price": "80"
                    },
                    {
                        "name": "કાજુ કારેલા",
                        "price": "100"
                    },
                    {
                        "name": "પાપડ કારેલા",
                        "price": "90"
                    },
                    {
                        "name": "સેવ લસણ",
                        "price": "80"
                    },
                    {
                        "name": "લસણીયા મગ",
                        "price": "80"
                    },
                    {
                        "name": "સેવ સીંગ ભજીયા",
                        "price": "90"
                    },
                    {
                        "name": "કસ્તુરી બુંદી",
                        "price": "80"
                    }
                ]
            },
            {
                "name": "કાઠિયાવાડી કહુંબો (સીઝનલ)",
                "items": [
                    {
                        "name": "તુવેર ઠોઠા",
                        "price": "90"
                    },
                    {
                        "name": "લીલા ચણા",
                        "price": "90"
                    },
                    {
                        "name": "લીલી હળદળ",
                        "price": "150"
                    },
                    {
                        "name": "ગ્રીન સેવ લસણ",
                        "price": "100"
                    },
                    {
                        "name": "મેથી લસણીયા બટાકા",
                        "price": "90"
                    },
                    {
                        "name": "મેથી પાપડ",
                        "price": "90"
                    },
                    {
                        "name": "તુવેર મેથી",
                        "price": "90"
                    }
                ]
            },
            {
                "name": "સ્પેશિયલ",
                "items": [
                    {
                        "name": "ચીઝ મસાલા રોટલો",
                        "price": "130"
                    }
                ]
            }
        ]
    };

    MENU.sections.forEach((group) => {
        const table = document.createElement("table");
        group.items.forEach((dish) => {
            const row = document.createElement("tr");
            const name = document.createElement("td");
            name.innerText = dish.name;
            row.appendChild(name);
            const price = document.createElement("td");
            price.innerText = `₹ ${dish.price}`;
            row.appendChild(price);
            table.appendChild(row);
        });
        const groupName = document.createElement("div");
        groupName.innerText = group.name;
        const section = document.createElement("section");
        section.appendChild(groupName);
        section.appendChild(table);
        container.appendChild(section);
    });
};
