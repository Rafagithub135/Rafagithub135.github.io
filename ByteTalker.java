import java.time.LocalDateTime;
import java.util.Scanner;

public class ByteTalker {
    public static void main(String[] args) {
        // Creates the scanner object.
        Scanner scanner = new Scanner(System.in);
        // Prompts the user to enter a message to encrypt.
        System.out.println("What message would you like to encrypt?");
        // Stores the user's message in the message variable.
        String message = scanner.nextLine();
        // Creates an array of random characters for the program to insert in between each character of the message.
        String[] randomCharacters = {"a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"};
        // SelectorNumbers are extra numbers that will be mixed into the time code to make it harder to crack.
        int selectorNumbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        // Creates a variable to store the current time.
        LocalDateTime currentTime = LocalDateTime.now();
        StringBuilder emessage = new StringBuilder();
        // Creates a variable to store just the hour.
        int hour = currentTime.getHour();
        // If statement to make the hour up to 12 characters instead of 24.  I will change this back to 24 for the actual program.
//        if (currentTime.getHour() > 10) {
//            hour = currentTime.getHour() - 12;
//        }
        // Creates a variable to store just the minute.
        int minute = currentTime.getMinute();
        // Displays the a selector code for the decripter to use to determine the original time.
        System.out.print(hour);
        System.out.println(minute);
        // Creates an array to select either the hour or the minute.
        int[] selector = {1, 2};
        // For loop to print the message and the random characters.
        for (int i = 0; i < message.length(); i++) {
            // Displays a character of the message and then is supposed to display either an "h" or an "m" to indicate whether the random number of characters are related to the hour or the minute.
            emessage.append(message.charAt(i));
            // Creates a variable to randomly select either the hour or the minute.
            int randomSelector = selector[(int) (Math.random() * selector.length)];
            // If statement to print an "h" if the randomSelector is a 1.
            if (randomSelector == 1) {
                // Actually displays the "h" to indicate that the random characters are related to the hour.
                emessage.append("h");
                // Creates a for loop to display the random characters.  The number of random characters is equal to the hour.
                for (int j = 1; j <= hour; j++) {
                    emessage.append(randomCharacters[(int) (Math.random() * hour)]);
                }
                // Else statement to print an "m" if the randomSelector is a 2.
            } else {
                // Actually displays the "m" to indicate that the random characters are related to the minute.
                emessage.append("m");
                // Creates a for loop to display the random characters.  The number of random characters is equal to the minute.
                for (int j = 1; j <= minute; j++) {
                    emessage.append(randomCharacters[(int) (Math.random() * minute)]);
                }
            }
        }
        // Prints the encrypted message.
        System.out.println(emessage);
    }
}