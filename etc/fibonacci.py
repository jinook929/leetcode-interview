cache = {}

def fib(n):
  if n < 2:
    return n
  if n in cache.keys():
    return cache[n]
  result = fib(n - 1) + fib(n - 2)
  cache[n] = result
  return result

print(fib(0)) # 0
print(fib(1)) # 1
print(fib(2)) # 1
print(fib(3)) # 2
print(fib(4)) # 3
print(fib(5)) # 5
print(fib(6)) # 8
print(fib(7)) # 13
print(fib(8)) # 21
print(fib(9)) # 34
print(fib(10)) # 55
print(fib(100)) # ?
print(fib(1000)) # ?
print(fib(1997)) # ?