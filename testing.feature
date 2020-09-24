        Given a new deal exists with following data
            | dealer  | performance |
            | carlos  | 1           |
            | hugo    | 3           |
            | luis    | 2           |
            | marcelo | 4           |
        When user enters data
            | product | currency | price |
            | coffee  | EUR      | 1     |
            | donut   | SEK      | 18    |

        Then grid shows
            | product | currency | price |
            | coffee  | EUR      | 1     |
            | donut   | SEK      | 18    |
