# HTML Multimedia

HTML allows you to easily embed audio and video directly into your web pages.

## Video Tag
The `<video>` tag is used to embed video files.

While you can use the `src` attribute directly on the `<video>` tag, it's better to use the `<source>` tag inside it. This allows you to provide multiple video formats for different browsers.

```html
<video width="400" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```
- `width` / `height`: Sets the size of the video player.
- `controls`: Very important! This adds the play, pause, and volume buttons. Without this, the video might not play.
- `autoplay`: Starts playing automatically (usually muted).
- `loop`: Plays the video over and over.

### The `<source>` Tag
- `src`: The path to your media file.
- `type`: Specifies the media type (MIME type), like `video/mp4` or `video/webm`. This helps the browser know if it can play the file before downloading it.
- You can provide multiple `<source>` tags. The browser will use the first one it supports.

## Audio Tag
The `<audio>` tag works very similarly to the video tag, and also benefits from using the `<source>` tag for multiple formats.

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```
- `controls`: Adds the play/pause audio interface.
