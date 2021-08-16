def largest_number(array):
    if len(array) == 1:
        return array[0]
    if array[0] > array[1]:
        array[1] = array[0]
    return largest_number(array[1:])

nums = [0, 2, 7, 4, 1, 3]

print(largest_number(nums))