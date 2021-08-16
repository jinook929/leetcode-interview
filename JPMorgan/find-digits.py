# https://www.geeksforgeeks.org/digits-whose-alphabetic-representations-are-jumbled-in-a-given-string/

a = "owoftnuoer"
b = "zesxrionezoreo"

def find_number(num_string, num_i, chars):
    num = ""
    check_again = True

    # check if num_string is in chars
    while check_again:
        tmp_num = ""
        tmp_chars = []
        for ch in num_string:
            if ch not in chars.keys():
                return []
            if ch in chars.keys() and chars[ch] > 0:
                chars[ch] -= 1
                tmp_num += ch
                tmp_chars.append(ch)
        # when all chars are found
        if tmp_num == num_string:
            num += str(num_i)
        # when not all chars are found
        else:
            check_again = False
            for tmp_char in tmp_chars:
                chars[tmp_char] += 1
        # check if check_again necessary
        if not check_again:
            break

    # update chars
    for i in range(len(num_string)):
        if chars[num_string[i]] == 0:
            del chars[num_string[i]]

    return [num, chars]

def find_digits(string):
    result = ""
    # create a list of number-strings
    num_strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    # create a dictionary that show what chars and how many times
    chars = {}
    for char in string:
        chars[char] = 1 if char not in chars else chars[char] + 1
    
    # empty chars by finding numbers
    while list(chars.keys()) != []:
        for i, num_string in enumerate(num_strings):
            # find each num_string in chars
            found_num = find_number(num_string, i, chars)
            if len(found_num) > 0:
                result += found_num[0]
                chars = found_num[1]
    
    return result

# print(find_digits(a))
# for _ in range(55555):
#     find_digits(b)
# print(find_digits(b))

def finddigits(s):     
    # Strings of digits 0-9
    num = [ "zero", "one", "two", "three",
            "four", "five", "six", "seven",
            "eight", "nine"]
 
    # Initialize vector
    arr = [0] * (10)
 
    # Initialize answer
    ans = ""
 
    # Size of the string
    n = len(s)
 
    # Traverse the string
    for i in range(n):
        if (s[i] == 'z'):
            arr[0] += 1
        if (s[i] == 'w'):
            arr[2] += 1
        if (s[i] == 'g'):
            arr[8] += 1
        if (s[i] == 'x'):
            arr[6] += 1
        if (s[i] == 'v'):
            arr[5] += 1
        if (s[i] == 'o'):
            arr[1] += 1
        if (s[i] == 's'):
            arr[7] += 1
        if (s[i] == 'f'):
            arr[4] += 1
        if (s[i] == 'h'):
            arr[3] += 1
        if (s[i] == 'i'):
            arr[9] += 1
             
    # Update the elements of the vector
    arr[7] -= arr[6]
    arr[5] -= arr[7]
    arr[4] -= arr[5]
    arr[1] -= (arr[2] + arr[4] + arr[0])
    arr[3] -= arr[8]
    arr[9] -= (arr[5] + arr[6] + arr[8])
    
    # Print the digits into their
    # original format
    for i in range(10):
        for j in range(arr[i]):
            ans += chr((i) + ord('0'))
 
    # Return answer
    return ans

print(finddigits(a))
for _ in range(55555):
    finddigits(b)
print(finddigits(b))