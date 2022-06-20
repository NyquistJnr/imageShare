import { Meteor } from 'meteor/meteor';

import Images from '../lib/collections';

Meteor.startup(function(){
if (Images.find().count() == 0){
	for (var i=1;i<19;i++){
		Images.insert(
			{
				img_src:"img_"+i+".jpg",
				img_alt:"image number "+i 
			}
		);	
	}// end of for insert images
	// count the images!
	console.log("Main.js says: "+Images.find().count());
}// end of if have no images
});
