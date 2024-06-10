# Difference Between `slice()`, `substring()`, and `substr()` String Methods
## `slice()`

**Parameters**: `slice()` takes two parameters: start and end. The start parameter specifies the index at which to begin the extraction, and the end parameter specifies the index at which to end the extraction (excluding the character at the end index). If end is omitted, `slice()` extracts to the end of the string.

**Behavior**: `slice()` extracts a section of a string and returns it as a new string, without modifying the original string.

### Code Example:
```
const str = "Hello, world!";
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(7));    // Output: "world!"
console.log(str);             // Output: "Hello, world!" (original string remains unchanged)
```

## `substring()`
**Parameters**: `substring()` takes two parameters: start and end. The start parameter specifies the index at which to begin the extraction, and the end parameter specifies the index at which to end the extraction (excluding the character at the end index). If end is omitted, `substring()` extracts to the end of the string, similar to `slice()`.
**Behavior**: Like `slice()`, `substring()` extracts a section of a string and returns it as a new string, without modifying the original string.

### Code Example:
```
const str = "Hello, world!";
console.log(str.substring(0, 5)); // Output: "Hello"
console.log(str.substring(7));   // Output: "world!"
console.log(str);               // Output: "Hello, world!" (original string remains unchanged)
```

`substr()`
**Parameters**: `substr()` takes two parameters: start and length. The start parameter specifies the index at which to begin the extraction, and the length parameter specifies the number of characters to extract. If length is omitted, `substr()` extracts characters to the end of the string.
**Behavior**: Unlike `slice()` and `substring()`, `substr()` extracts characters from a string starting at a specified location through the specified number of characters. It returns the extracted part of the string as a new string, without modifying the original string.


## Code Example:
```
const str = "Hello, world!";
console.log(str.substr(0, 5)); // Output: "Hello"
console.log(str.substr(7));    // Output: "world!"
console.log(str);               // Output: "Hello, world!" (original string remains unchanged)
```

Summary:
`slice()` and `substring()` are quite similar, with the main difference being in how they handle negative parameters. `slice()` allows negative parameters to index the string from the end, while `substring()` treats negative parameters as if they were 0.
`substr()` is similar to `slice()`, but it uses a different syntax for specifying the length of the substring to extract.
All three methods return a new string without modifying the original string.