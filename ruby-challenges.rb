# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# create a method even_or_odd
# conditional to determine between even of odd numbers

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
def even_or_odd(num)
    if num % 2 == 0
        'even'
    else 
        'odd'
    end
end

p even_or_odd(num1)
p even_or_odd(num2)
p even_or_odd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# create a method named remove_vowels 
# use a method to remove the vowels in a string

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(str)
    str.delete "aeiouAEIOU"
end
p remove_vowels(album1)
p remove_vowels(album2)
p remove_vowels(album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

# create a method names palindrome
# check if the string is equal to a string reversed 
# change the string to lowercase so no errors between same letter that is capitalized

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(str)
    if str.reverse == str
        "#{str} is a palindrome"
    else 
        "#{str} is not a palindrome"
    end
end

p palindrome(is_palindrome1.downcase)
p palindrome(is_palindrome2.downcase)
p palindrome(is_palindrome3.downcase)
