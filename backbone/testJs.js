/*
var Photo = Backbone.Model.extend({
	defaults : {
		src : "photo.jpeg",
		title : "it's photo"
	}
})
var myPhoto = new Photo({
	src : "new_photo.jpeg",
	title : "new title",
	size:[480,800]
})
myPhoto.get("src")
myPhoto.get("title")
myPhoto.get("size")
myPhoto.set({newAttr : "new attribute"})
console.log(myPhoto.get("newAttr"))
*/

var Photo = Backbone.Model.extend({
	validate: function (attributes) {
		if (attributes.src === 'photo.jpg') {
			alert('이 값은 사용하지 마세요');
			return true;
		}
	}
});
 
var myPhoto = new Photo;
myPhoto.set({src: 'photo.jpg'})
console.log(myPhoto.get("src"))




