import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    campaigntitle: [
        validator('presence', true),
        validator('length', {
            max: 80,
        })
    ],

     shortdescription: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    campaigncategory: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    goalamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    startproject: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9/.]+$/,
            type: 'number'
        })
    ],

     rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],


    rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/^[0-9.]+$/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],
});

export default Ember.Controller.extend(Validations,{
    showStartResponse: false,
    isAddReward: false,
    isSaveReward: false,
    CampaignCategory: ['Education', 'Children', 'Animal Welfare','Environment','Film','Dance',],
    actions: {

        upload: function(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    let imageData;

    // Note: reading file is async
    reader.onload = () => {
      imageData = reader.result;
      this.set('data.image', imageData);
      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  },

  videoupload: function(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    let videoData;

    // Note: reading file is async
    reader.onload = () => {
      videoData = reader.result;
      this.set('data.video', videoData)

      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  },

        start: function(){
            this.set('showStartResponse', true);    
        },
        
        regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('fund-raiser');
        },

        dismissModal: function() {
            this.set('showStartResponse', false);
        },

        createCampaign: function() {
            
        },

        addRewards: function() {
           this.transitionToRoute('addrewards');
        },

        saveRewards: function() {
            var rewardtitle = this.get('rewardtitle');
            var rewardamount = this.get('rewardamount');
            var rewarddescription = this.get('rewarddescription');
            //var deliveryDate = this.get('deliveryDate');
            
            if (rewardtitle === null || rewardtitle === undefined || rewardtitle === "") {
                this.set('rewardtitleerrormessage', "field cannot be empty")
                //return;
            }

            if (rewardamount === null || rewardamount === undefined || rewardamount === "") {
                this.set('rewardamounterrormessage', "field cannot be empty")
                //return;
            }

            if (rewarddescription === null || rewarddescription === undefined || rewarddescription === "") {
                this.set('rewarddescriptionerrormessage', "field cannot be empty")
                return;
            }

            /*if (deliveryDate === null || deliveryDate === undefined || deliveryDate === "") {
                this.set('dateerrormessage', "Date field cannot be empty")
                return;
            }*/
            this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
           
            },
            toggleModal1: function() {
            var campaigntitle = this.get('campaigntitle');
            var chosen = this.get('selectedtypes');
            var content = this.get('content');
            var contents = this.get('contents');
            var goalamount = this.get('goalamount');
            var startdeliverydate = this.get('startdeliverydate');
            var startproject = this.get('startproject');
            var enddeliverydate = this.get('enddeliverydate');
            if (campaigntitle === null || campaigntitle === undefined || campaigntitle === "") {
                this.set('errormessage1', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            if (chosen === null || chosen === undefined) {
                this.set('errormessage3', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }

            if (content === null || content === undefined || content === "") {
                this.set('errormessage2', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            
            if (contents === null || contents === undefined || contents === "") {
                this.set('errormessage4', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (goalamount === null || goalamount === undefined || goalamount === "") {
                this.set('errormessage5', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (startdeliverydate === null || startdeliverydate === undefined || startdeliverydate === "") {
                this.set('startdateerrormessage', "Date field cannot be empty")
                //return;
            }
            if (startproject === null || startproject === undefined || startproject === "") {
                this.set('startprojecterror', "field cannot be empty")
                //return;
            }
            if (enddeliverydate === null || enddeliverydate === undefined || enddeliverydate === "") {
                this.set('enddateerrormessage', "Date field cannot be empty")
                //return;
            }
            if ((campaigntitle === null || campaigntitle === undefined || campaigntitle === "") ||                 
                (chosen === null || chosen === undefined) ||
                (content === null || content === undefined || content === "") ||
                (contents === null || contents === undefined || contents === "")  ||
                (goalamount === null || goalamount === undefined || goalamount === "") ||
                (startdeliverydate === null || startdeliverydate === undefined || startdeliverydate === "") ||
                (startproject === null || startproject === undefined || startproject === "") ||
                (enddeliverydate === null || enddeliverydate === undefined || enddeliverydate === "")){
                    this.toggleProperty('isShowingModal');
                }
            else{
                    this.toggleProperty('isShowingModalss');
                }
         },

         home:function(){
             this.transitionToRoute('home');
             window.location.reload(true);
         },
         /* home2:function(){
              window.location.reload(true);
         }*/
    }
    
     /*deliveryDate: Ember.computed(function () {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    })*/
});