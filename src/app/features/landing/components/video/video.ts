import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-video',
  styleUrl: './video.css',
  templateUrl: './video.html',
})
export class Video {
  private readonly productVideo = viewChild<ElementRef<HTMLVideoElement>>('productVideo');
  readonly overlayHidden = signal(false);

  playVideo() {
    this.overlayHidden.set(true);
    this.productVideo()?.nativeElement.play().catch(() => {});
  }

  hideOverlay() {
    this.overlayHidden.set(true);
  }

  showOverlay() {
    this.overlayHidden.set(false);
  }
}
