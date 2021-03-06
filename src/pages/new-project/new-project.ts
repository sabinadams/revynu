import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';

@Component({
  selector: 'page-new-project',
  templateUrl: 'new-project.html'
})
export class NewProjectPage implements OnInit{
  constructor(public navCtrl: NavController, private photoLibrary: PhotoLibrary) {

  }

  ngOnInit(){
  	this.getPhotos()
  }
  getPhotos(){
	  this.photoLibrary.requestAuthorization().then(() => {
	    this.photoLibrary.getLibrary().subscribe({
	      next: library => {
	        library.forEach(function(libraryItem) {
	          console.log(libraryItem.id);          // ID of the photo
	          console.log(libraryItem.photoURL);    // Cross-platform access to photo
	          console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
	          console.log(libraryItem.fileName);
	          console.log(libraryItem.width);
	          console.log(libraryItem.height);
	          console.log(libraryItem.creationDate);
	          console.log(libraryItem.latitude);
	          console.log(libraryItem.longitude);
	          console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
	        });
	      },
	      error: err => {},
	      complete: () => { console.log("could not get photos"); }
	    });
	  })
	  .catch(err => console.log("permissions weren't granted"));
  }
}
