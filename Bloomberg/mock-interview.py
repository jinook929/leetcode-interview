'''
The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

Implement a Class called Collatz and a method numSteps that returns the number.

Samples:
steps(16) -> 4
steps(8) -> 3
steps(1) -> 0
steps(3) -> 7
'''

class Collatz:
    def __init__(self):
        self.cache = {}

    def numSteps(self, n, counter = 0):
        if n == 1:
            return counter

        try: 
            self.cache[n]
        except:
            print(f"current n = {n}")
            c = counter
            if n % 2 == 0:
                tmp = self.numSteps(int(n / 2), c + 1)
                self.cache[n] = tmp
                return tmp
                # counter += 1
                # n = n / 2
            else:
                tmp = self.numSteps(int(n * 3 + 1), c + 1)
                self.cache[n] = tmp
                return tmp
                # counter += 1
                # n = n * 3 + 1

c = Collatz()
steps = c.numSteps
print(c.cache)
print(steps(8))
print(c.cache)
# print(steps(5))
# print(steps(16))