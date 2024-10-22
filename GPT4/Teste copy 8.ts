class StringReverser {
    reverse(str: string): string {
      return str.split('').reverse().join('');
    }
  }
  
  class PalindromeChecker {
    word: string;
  
    constructor(word: string) {
      this.word = word;
    }
  
    isPalindrome(): boolean {
      const reverser = new StringReverser();
      return this.word === reverser.reverse(this.word);
    }
  }
  