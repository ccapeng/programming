from datetime import datetime


def fib(n):
  x1= 0
  x2 = 1
  x3 = 0
  for i in range(n):
    x3 = x1 + x2
    x1 = x2
    x2 = x3
  return x3


def fib_next():
  x1= 0
  x2 = 1
  def next():
    nonlocal x1
    nonlocal x2
    x3 = x1 + x2
    x1, x2 = x2, x3
    return x3
  return next


def fib_closure(n):
  x3 = 0
  f = fib_next()
  for i in range(n):
    x3 = f()
  return x3


if __name__ == "__main__":
  sum = 0
  for i in range(10):
    start = datetime.now()
    result = fib(20)
    print(i,"> ", result)
    end = datetime.now()
    eclipse = end - start
    sum = sum + eclipse.microseconds
    print(eclipse)

  print("Average", sum / 10)
  print("------------------")

  sum = 0
  for i in range(10):
    start = datetime.now()
    result = fib_closure(20)
    print(i,"> ", result)
    end = datetime.now()
    eclipse = end - start
    sum = sum + eclipse.microseconds
    print(eclipse)

  print("Average", sum / 10)