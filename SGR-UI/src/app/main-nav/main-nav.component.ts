import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('overlay', { static: false }) overlay;
  @ViewChild('matcard', { static: false }) matCard;
  @ViewChildren('myCanvas') canvasList:QueryList<any>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public cardList: any[];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    this.cardList = [{
      title: "re", subtitle: "ww", img: "https://i.ibb.co/HVdnvJX/d7bf5c94-40ec-4f44-b099-7b154cf1fedc.jpg", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww",img: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/boat.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/cat.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww",img: "https://homepages.cae.wisc.edu/~ece533/images/boat.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/frymire.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww",img: "https://homepages.cae.wisc.edu/~ece533/images/girl.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/pool.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww",img: "https://homepages.cae.wisc.edu/~ece533/images/serrano.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/tulips.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/us021.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww",img: "https://homepages.cae.wisc.edu/~ece533/images/us092.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/watch.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww", img: "https://homepages.cae.wisc.edu/~ece533/images/zelda.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "re", subtitle: "ww",img: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png", locked: true,
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    }
  ];
    // var c = this.canvas.nativeElement;
    // this.context = c.getContext("2d");
    // var img = new Image();
    // this.context.clearRect(0,0,300,300);
    // img.src = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    // setTimeout(() => {
    //   this.context.drawImage(img, 10, 10);
    // },2000)

  }

  ngAfterViewInit() {
    console.log(this.canvasList.toArray());
    for (let i = 0; i < this.cardList.length; i++)
      this.onCanvasLoad(i);

      var canvas = this.overlay.nativeElement;
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(188, 50, 200, 100);
      context.fillStyle = 'yellow';
      context.fill();
      context.lineWidth = 7;
      // context.strokeStyle = 'black';
      context.stroke();

  }
  
  onCanvasLoad(i){
     var canvas = this.canvasList.toArray()[i].nativeElement; 
     var matCardWidth = this.matCard.nativeElement.offsetWidth;
     console.log(matCardWidth);
     
    var ctx = canvas.getContext("2d");
    var locked = this.cardList[i].locked;
    var img = new Image(); //Create a background image
    img.onload = function () {
      ctx.drawImage(img, 0, 0, matCardWidth, 400);
      
      if(locked){
      ctx.beginPath();
      ctx.rect(0, 0, 400, 500);
      ctx.fillStyle = "rgba(0,0,0,.9)";
      ctx.fill();
      ctx.stroke();
      }
    }
    console.log(this.cardList[i].img);
    
    img.src = this.cardList[i].img;
    // "https://material.angular.io/assets/img/examples/shiba2.jpg";
  }

  showImg(i) {
    this.cardList[i].locked = false;
    var canvas = this.canvasList.toArray()[i].nativeElement;
    var ctx = canvas.getContext("2d");
    var matCardWidth = this.matCard.nativeElement.offsetWidth;
    var img = new Image(); //Create a background image
    img.onload = function () {
      ctx.drawImage(img, 0, 0, matCardWidth, 400);
    }
    console.log(this.cardList[i].img);
    
    img.src = this.cardList[i].img;
  }
}
