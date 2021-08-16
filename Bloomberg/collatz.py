# target = 1
# even / 2
# odd * 3 + 1

# 2 => 2/2=1 [1]
# 3 => 3*3+1=10 => 10/2=5 => 5*3+1=16 => 16/2=8 => 8/2=4 => 4/2=2 => 2/2=1 [7]
# 4 => 4/2=2 => 2/2=1 [2]

class Collatz:
  def __init__(self):
    self.cache = {}
  
  ### looping version
  # def numSteps(self, n):
  #   counter = 0
  #   while n != 1:
  #     n = n / 2 if n % 2 == 0 else n * 3 + 1
  #     counter += 1
  #   return counter

  ### memoization version
  def numSteps(self, n):
    if n in self.cache:
      return self.cache[n]
    key = n
    counter = 0
    while n != 1:
      n = n / 2 if n % 2 == 0 else n * 3 + 1
      counter += 1
    self.cache[key] = counter
    return counter
    
  ### recursion version
  # def numSteps(self, n, counter = 0):
  #   if n == 1:
  #     return counter    
  #   counter += 1
  #   if n % 2 == 0:
  #     return self.numSteps(n / 2, counter)
  #   else:
  #     return self.numSteps(n * 3 + 1, counter)

  ### recursion with memoization version
  # def numSteps(self, n, counter = 0, on = 1):
  #   originalNum = n if counter == 0 else on
  #   if originalNum in self.cache:
  #     return self.cache[originalNum]
  #   if n == 1:
  #     self.cache[originalNum] = counter
  #     return counter
  #   counter += 1
  #   if n % 2 == 0:
  #     return self.numSteps(n / 2, counter, originalNum)
  #   else:
  #     return self.numSteps(n * 3 + 1, counter, originalNum)

c = Collatz()
print(c.numSteps(1))
print(c.numSteps(2))
print(c.numSteps(3))
print(c.numSteps(4))
print(c.numSteps(8))
print(c.numSteps(63_728_127))
for _ in range(4444):
  c.numSteps(670_617_279)
print(c.numSteps(670_617_279))
# print(c.numSteps(9_780_657_631))
# for _ in range(444444):
#   c.numSteps(75_128_138_247)
# print(c.numSteps(75_128_138_247))
# print(c.cache)
