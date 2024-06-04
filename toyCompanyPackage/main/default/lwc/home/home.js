import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Home extends NavigationMixin(LightningElement) {

    navigateToFeaturedItems(e) {
        this[NavigationMixin.Navigate]({

            type: 'comm__namedPage',
            attributes: {
                name: 'FeaturedItems__c',
            },
            state: {
                
            }
        })
    
    }
}