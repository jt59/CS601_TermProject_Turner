const App = Vue.createApp({
    data() {
        return {
            images: [{
                id: 1,
                src: "https://drive.google.com/uc?export=view&id=1UKO-AlOADcr0ATFran1MrkLyPo7FG68v",
                alt:"Watching the Sunset in San Pedro",
                location: "San Pedro"
            },
            {
                id: 2,
                src: "https://drive.google.com/uc?export=view&id=1RmT_PAGW1TkbVD1YeDPIchiX2cznhZBm",
                alt:"Carter and Me on a Dive",
                location: "San Pedro"
            },
            {
                id: 3,
                src: "https://drive.google.com/uc?export=view&id=1zO2Ja4WAZtIfyaG6Mjm9UnvJTaayAi_W",
                alt:"Disputed Belizean Border",
                location: "None"
            },
            {
                id: 4,
                src: "https://drive.google.com/uc?export=view&id=1amG_JKl3mH8VFe4awkAZQn9H5NQzHL-E",
                alt:"Map of Belize",
                location: "None"
            },
            {
                id: 5,
                src: "https://drive.google.com/uc?export=view&id=1JONUN7bKiYynBCE-RHGqPNMQHQ6Suxcc",
                alt:"A Mayan Ruin Site in Lamanai",
                location: "Lamanai"
            },
            {
                id: 6,
                src: "https://drive.google.com/uc?export=view&id=1FbRwvcO5OBmn8_OOHFzPZ5RH_oaC_FRx",
                alt:"Me at Ramon's",
                location: "San Pedro"
            },
            {
                id: 7,
                src: "https://drive.google.com/uc?export=view&id=1Ef9geKvcGDFllJcIG5G0YKWd4nS8Jqm8",
                alt:"Jungle near Caves Branch",
                location: "Caves Branch"
            }
        ],
        videos: [{
                id: 1,
                src: "https://drive.google.com/uc?export=view&id=1zYiAH-uyY38S5eoPTxLjzsrZQ9PeMZuv",
                alt:"Me swimming with a reef shark",
                type:"video/mp4",
                location: "San Pedro"
             },
             {
                id: 2,
                src: "https://drive.google.com/uc?export=view&id=1MQJyv3e2nCuiakJoDlnikJyqnuHRZZ3C",
                alt:"Jumping into the water at The Split",
                type:"video/mp4",
                location: "Caye Caulker"
             },
             {
                id: 3,
                src: "https://drive.google.com/uc?export=view&id=1afUB5bba22bZNqIJEkJ-_-D43T-59e8g",
                alt:"Landing at the bottom of the Black Hole",
                type:"video/mp4",
                location: "Caves Branch"
             },
             {
                id: 4,
                src: "https://drive.google.com/uc?export=view&id=1WNZue3ZyDWFMBchKaEB1RgCO9KQHU-cH",
                alt:"Carter jumping off a waterfall in a cave",
                type:"video/mp4",
                location: "Caves Branch"
             }
        ],

        galleryFilters: [{
            location: "San Pedro",
        },
        {
            location: "Caye Caulker"
        },
        {
            location: "Lamanai"
        },
        {
            location: "Caves Branch",
            
        },
        {
            location: "All"
        }
        ],

        checkedLocations: ["San Pedro", "Caye Caulker", "Lamanai", "Caves Branch","All"],

        formErrors: [],

        formElements: {
            firstName: null,
            lastName: null,
            email: null,
            inquiry: null,
            submitted:false,
            storedName: null
        },
        

        weatherAttributesBC: {
            city: "",
            country:"",
            temp:"",
            conditions:"",
            feelslike:"",
        },
        weatherAttributesSP: {
            city: "",
            country:"",
            temp:"",
            conditions:"",
            feelslike:"",
        }
        

        }
    },

    computed: {
        sanPedroInArray: function() {
            if (this.checkedLocations.includes(this.galleryFilters[0].location)) {
                return true;
            } else {
                return false;
            }
        },
        cayeCaulkerInArray: function() {
            if (this.checkedLocations.includes(this.galleryFilters[1].location)) {
                return true;
            } else {
                return false;
            }
        },
        lamanaiInArray: function() {
            if (this.checkedLocations.includes(this.galleryFilters[2].location)) {
                return true;
            } else {
                return false;
            }
        },
        cavesBranchInArray: function() {
            if (this.checkedLocations.includes(this.galleryFilters[3].location)) {
                return true;
            } else {
                return false;
            }
        }


    },
    created() {
            fetch('https://api.weatherapi.com/v1/current.json?key=7824e3099e864fc08d0225650221506&q=Belize City&aqi=no')
            .then(response => {
                if (response.status <= 400) {
                    return response.json();
                } else {
                alert("error!");
                }
            })
            .then(data => this.postToDomBC(data) )
            .catch(error => console.error(`Error: ${error}`) )
            .finally(console.log("Complete"));

            fetch('https://api.weatherapi.com/v1/current.json?key=7824e3099e864fc08d0225650221506&q=San Pedro, Belize&aqi=no')
            .then(response => {
                if (response.status <= 400) {
                    return response.json();
                } else {
                alert("error!");
                }
            })
            .then(data => this.postToDomSP(data) )
            .catch(error => console.error(`Error: ${error}`) )
            .finally(console.log("Complete"));
    },
    methods: {

        postToDomBC: function(data) {
            this.weatherAttributesBC.city = data.location.name;
            this.weatherAttributesBC.country = data.location.country;
            this.weatherAttributesBC.temp = data.current.temp_f;
            this.weatherAttributesBC.conditions = data.current.condition.text;
            this.weatherAttributesBC.feelslike = data.current.feelslike_f;
        },
        postToDomSP: function(data) {
            this.weatherAttributesSP.city = data.location.name;
            this.weatherAttributesSP.country = data.location.country;
            this.weatherAttributesSP.temp = data.current.temp_f;
            this.weatherAttributesSP.conditions = data.current.condition.text;
            this.weatherAttributesSP.feelslike = data.current.feelslike_f;
        },

        validateContact: function(e) {
            this.formElements.submitted = false;
            this.formElements.storedName = null;
            const form = e.event;
            this.formErrors = [];
            if(!this.formElements.firstName) {
                this.formErrors.push("First name required");
            } else if (!(/[a-zA-Z]/).test(this.formElements.firstName)) {
                this.formErrors.push("Please make sure your first name has letters only.");
            }
            if(!this.formElements.lastName) {
                this.formErrors.push("Last name required");
            } else if (!(/[a-zA-Z]/).test(this.formElements.lastName)) {
                this.formErrors.push("Please make sure your last name has letters only.");
            }
            if(!this.formElements.email) {
                this.formErrors.push("Email required");
            } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.formElements.email)) {
                this.formErrors.push("Please enter a valid email");
            }
            if(!this.formElements.inquiry) {
                this.formErrors.push("Please enter an inquiry");
            } 
            if (this.formErrors.length == 0) {
                e.preventDefault();
                this.formElements.submitted= true;
                this.formElements.storedName = this.formElements.firstName;
                this.formElements.firstName = null;
                this.formElements.lastName = null;
                this.formElements.email = null;
                this.formElements.inquiry = null;
                return true;
            }
            e.preventDefault();
        },

        checkedAll:  function () {
            if (this.checkedLocations.length < this.galleryFilters.length) {
                this.checkedLocations = [];
                for (const location in this.galleryFilters) {
                    this.checkedLocations.push(this.galleryFilters[location].location);
                } 
            } else {
                this.checkedLocations = [];
            }
        },

        uncheckAll: function(e) {
            if (this.checkedLocations.includes("All")) {
                const b = this.checkedLocations.indexOf("All");
                this.checkedLocations.splice(b,1);
            }
            if (this.checkedLocations.includes(e.target.id)) {
                const a = this.checkedLocations.indexOf(e.target.id);
                this.checkedLocations.splice(a,1);
            } 
        }
    },
    
});

App.mount('#app');