def leftRigth(array):
    """ finds the index at which the left and
        right side of the array gives the same result
    """
    ind = 0
    for i in range(len(array)):
        left = sumArray(array[0:i])
        rigth = sumArray(array[i + 1:len(array)])
        if left == rigth:
            ind = i
            break
    return ind


def sumArray(array):
    """ sums the elements of an array """
    sum = 0
    for i in range(len(array)):
        sum += int(array[i])
    return sum