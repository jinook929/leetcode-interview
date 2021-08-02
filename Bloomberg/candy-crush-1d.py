def candy_crush(s): # ABCCCCCBBAACDDDCCC -> C
    checkAgain = True # set flag true to begin first check
    while checkAgain: # repeat checking till no string update
        checkAgain = False # set default flag not to repeat
        counter = 0 # set same letter counter
        left = 0 # set 2 pointers for letter comparison range
        right = 0 # set 2 pointers for letter comparison range
        while right < len(s): # iterate to the end of string
            if s[left] == s[right]: # when letter comparison is the same
                counter += 1 # increment counter
                right += 1 # expand right end of the range
                if right == len(s) and counter >= 3: # when the same letter sequence is at the end of string
                    s = s.replace(s[left] * counter, "") # remove repeated chrs
                    left = 0 # reset left end
                    right = 0 # reset right end
                    counter = 0 # reset counter
                    checkAgain = True # flag to re-check updated string
            else: # when letter comparison is different
                if counter >= 3: # when different chr is found and counter >= 3
                    s = s.replace(s[left] * counter, "") # remove repeated chrs
                    right = right - counter # sync right end to left end
                    checkAgain = True # flag to re-check updated string
                left = right # reset pointers to start over with next chr 
                counter = 0 # reset counter
    return s

#### test cases
print(candy_crush("ABCCCCCBBAACDDDCCC"))
string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaaaa?!?!"
print("result : " + candy_crush(string)) # a?!?!
string = "abcdeeeddccccbbaaaaa!"
print("result : " + candy_crush(string)) # abcbb!
string = "abcdeeeddccccbbaaaaa"
print("result : " + candy_crush(string)) # abcbb
string = "axbcdeeeccccddccbbaaaaa"
print("result : " + candy_crush(string)) # ax
string = "abcccbaaaa"
print("result : " + candy_crush(string)) # abb
string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"
print("result : " + candy_crush(string)) # empty string

#### speed test
# import datetime
# t1 = datetime.datetime.now()
# string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa?!?!"
# for i in range(111111): candy_crush(str)
# print("result : " + candy_crush(string)) # ?!?!
# t2 = datetime.datetime.now()
# print(t2 - t1)



#### window range version

string = "abccccbba"
# [a,b,c,c,c,c,b,b,a] => aa
def candy_crush_1d(s):
    string = list(s) # convert string to list
    for i in range(len(string)): # convert chr to int
        string[i] = ord(string[i])
    checkAgain = False # set flag
    counter = 0 # set counter
    for x in range(len(string) - 2):
        tmpValue = abs(string[x]) # set current abs value to compare
        if tmpValue == abs(string[x+1]) and tmpValue == abs(string[x+2]): # when sequence found
            string[x] = -tmpValue # convert values to negative
            string[x+1] = -tmpValue # convert values to negative
            string[x+2] = -tmpValue # convert values to negative
            checkAgain = True # change flag for re-check
    result = "" # set result string
    for x in string: # convert positive int to chr
        if x > 0:
            result += chr(x)
    return candy_crush_1d(result) if checkAgain else result # check whether to repeat

#### test cases
# print(candy_crush_1d(string)) # aa
string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"
print(f"Result of candy_crush => " + candy_crush(string)) # ""
print(f"Result of candy_crush_1d => " + candy_crush_1d(string)) # ""
string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaa!"
print(f"Result of candy_crush => " + candy_crush(string)) # "a!"
print(f"Result of candy_crush_1d => " + candy_crush_1d(string)) # "a!"
string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaa"
print(f"Result of candy_crush => " + candy_crush(string)) # "a"
print(f"Result of candy_crush_1d => " + candy_crush_1d(string)) # "a"

import datetime
string = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaa"

t1 = datetime.datetime.now()
for i in range(11111): candy_crush(string)
print("2 Pointer version result : " + candy_crush(string)) # a
t2 = datetime.datetime.now()
print(t2 - t1)

t1 = datetime.datetime.now()
for i in range(11111): candy_crush_1d(string)
print("Window Range version result : " + candy_crush_1d(string)) # a
t2 = datetime.datetime.now()
print(t2 - t1)
