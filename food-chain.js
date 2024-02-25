class Song {
  constructor(subject) {
    this.subject = subject;
  }

  // 메서드들
  verse(num) {
    const lyrics = `I know an old lady who swallowed a ${this.subject}.
    I don't know why she swallowed the fly. Perhaps she'll die`;

    return lyrics.repeat(num);
  }
}

let song = new Song("fly");
const aa = song.verse(1);
console.log(aa);
// song.verses(1, 2)
// song.verse(1)

// spider 2
// `I know an old lady who swallowed a spider.
// It wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// bird3
// const expected = `I know an old lady who swallowed a bird.
// How absurd to swallow a bird!
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// cat4

// xtest('cat', () => {
//   const expected = `I know an old lady who swallowed a cat.
// Imagine that, to swallow a cat!
// She swallowed the cat to catch the bird.
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.
// `;
