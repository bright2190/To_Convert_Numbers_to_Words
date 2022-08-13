 //alert("hello");
// declaring a function
 encryption = message => {

    // declaring a variable
    let encryptedMessage;
    const messageArr = message.split("");
  //  console.log("message array", messageArr);
      
    // declaring an empty array
    let encryptedMessageArr = [];


    //we use for loop first
    for (i =0; i < messageArr.length; i++) {


        let letter;

        switch(messageArr[i]) {
            case "a":
                letter = "$";
                break;

                case "b":
                letter = "*";
                break;

                case "c":
                letter = "%";
                break;

                case "d":
                letter = "&";
                break;

                case "e":
                letter = ">";
                break;

                case "f":
                letter = "<";
                break;

                case "g":
                letter = "!";
                break;

                case "h":
                letter = ")";
                break;

                case "i":
                letter = "+";
                break;

                case "j":
                letter = "(";
                break;

                case "k":
                letter = "@";
                break;

                case "l":
                letter = "a";
                break;

                case "m":
                letter = "b";
                break;

                case "n":
                letter = "c";
                break;

                case "o":
                letter = "d";
                break;

                case "p":
                letter = "e";
                break;

                case "q":
                letter = "f";
                break;

                case "r":
                letter = "g";
                break;

                case "s":
                letter = "h";
                break;

                case "t":
                letter = "i";
                break;

                case "u":
                letter = "j";
                break;

                case "v":
                letter = "k";
                break;

                case "w":
                letter = "l";
                break;

                case "x":
                letter = "m";
                break;

                case "y":
                letter = "n";
                break;

                case "z":
                letter = "o";
                break;
                default:
                    letter = messageArr[i];
                    break;
        }
        encryptedMessageArr.push(letter);
       // console.log("encrypted message array", encryptedMessageArr)
    }

    encryptedMessage = encryptedMessageArr.join("")
    return encryptedMessage;
 };

 console.log("encrypted message: ", encryption("hello how are you doing"));



 // declaring a function
decryption = message => {

    // declaring a variable
    let decryptedMessage;
    const messageArr = message.split("");
    //console.log("message array", messageArr);
      
    // declaring an empty array
    let decryptedMessageArr = [];


    //we use for loop first
    for (i =0; i < messageArr.length; i++) {


        let letter;

        switch(messageArr[i]) {
            case "$":
                letter = "a";
                break;

                case "*":
                letter = "b";
                break;

                case "%":
                letter = "c";
                break;

                case "&":
                letter = "d";
                break;

                case ">":
                letter = "e";
                break;

                case "<":
                letter = "f";
                break;

                case "!":
                letter = "g";
                break;

                case ")":
                letter = "h";
                break;

                case "+":
                letter = "i";
                break;

                case "(":
                letter = "j";
                break;

                case "@":
                letter = "k";
                break;

                case "a":
                letter = "l";
                break;

                case "b":
                letter = "m";
                break;

                case "c":
                letter = "n";
                break;

                case "d":
                letter = "o";
                break;

                case "e":
                letter = "p";
                break;

                case "f":
                letter = "q";
                break;

                case "g":
                letter = "r";
                break;

                case "h":
                letter = "s";
                break;

                case "i":
                letter = "t";
                break;

                case "j":
                letter = "u";
                break;

                case "k":
                letter = "v";
                break;

                case "l":
                letter = "w";
                break;

                case "m":
                letter = "x";
                break;

                case "n":
                letter = "y";
                break;

                case "o":
                letter = "z";
                break;
                default:
                    letter = messageArr[i];
                    break;
        }
        decryptedMessageArr.push(letter);
       // console.log("decrypted message array", decryptedMessageArr)
    }

    decryptedMessage = decryptedMessageArr.join("")
    return decryptedMessage;
 };

console.log("decrypted message: ", decryption(")>aad )dl $g> ndj &d+c!"));