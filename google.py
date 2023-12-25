#  As Commander Lambda's personal assistant, you've been assigned the task of configuring the LAMBCHOP doomsday
#  device's axial orientation gears. It should be pretty simple -- just add
#  gears to create the appropriate rotation ratio. But the problem is, due to
#  the layout of the LAMBCHOP and the complicated system of beams and pipes supporting
#  it, the pegs that will support the gears are fixed in place.The LAMBCHOP's engineers have
#  given you lists identifying the placement of groups of pegs along various support beams.
#  You need to place a gear on each peg (otherwise the gears will collide with unoccupied pegs).
#  The engineers have plenty of gears in all different sizes stocked up, so you can choose gears
#  of any size, from a radius of 1 on up. Your goal is to build a system where the last gear
# rotates at twice the rate (in revolutions per minute, or rpm) of the first gear, no matter
#  the direction. Each gear (except the last) touches and turns the gear on the next peg to
#  the right
# Given a list of distinct positive integers named pegs representing the location of
#  each peg along the support beam, write a function solution(pegs) which, if there is
#  a solution, returns a list of two positive integers a and b representing the numerator
#  and denominator of the first gear's radius in its simplest form in order to achieve the
#  goal above, such that radius = a/b. The ratio a/b should be greater than or equal to 1.
#  Not all support configurations will necessarily be capable of creating the proper rotation
#  ratio, so if the task is impossible, the function solution(pegs) should return the list [-1, -1].
#  For example, if the pegs are placed at [4, 30, 50], then the first gear could have a radius of 12,
#  the second gear could have a radius of 14, and the last one a radius of 6. Thus,
#  the last gear would rotate twice as fast as the first one.
#  In this case, pegs would be [4, 30, 50] and solution(pegs) should return [12, 1].
#  The list pegs will be given sorted in ascending order and will contain at least 2 and no more
#  than 20 distinct positive integers, all between 1 and 10000 inclusive.-------------------------
#  Python cases --
#  Input:solution.solution([4, 17, 50])Output:    -1,-1

#  Input:solution.solution([4, 30, 50])Output:    12,1

def solution(pegs):
    import math

    # Calculate the adjusted sum of pegs, which depends on the pattern of addition and subtraction.
    adjusted_sum = (-pegs[0] + pegs[-1]) if len(pegs) % 2 == 0 else (-pegs[0] - pegs[-1])
    for i in range(1, len(pegs) - 1):
        adjusted_sum += 2 * (-1) ** i * pegs[i]

    # Determine the first gear's radius. The last gear must be 2.0 times the radius of the first gear.
    first_gear_radius = float(adjusted_sum) / 3 if len(pegs) % 2 == 0 else (-adjusted_sum) * 2

    # If the first gear's radius turns out to be less than 2, the task is impossible.
    if first_gear_radius < 1:
        return [-1, -1]

    # Validate that every gear after the first has a radius > 1, given the first gear's radius.
    current_radius = first_gear_radius
    for i in range(len(pegs) - 1):
        distance = pegs[i + 1] - pegs[i]
        next_radius = distance - current_radius
        if current_radius < 1 or next_radius < 1:
            return [-1, -1]
        current_radius = next_radius

    # The radius of the first gear should be returned as a fraction in its simplest form.
    # The denominator should be 1 for even-length pegs and 3 for odd-length pegs.
    denominator = 1 if len(pegs) % 2 == 0 else 3

    # Check if the first gear's radius is an integer, then no need for a denominator.
    if first_gear_radius.is_integer():
        return [int(first_gear_radius), 1]

    # Calculate the greatest common divisor of the numerator and denominator and simplify.
    gcd_value = math.gcd(int(first_gear_radius * denominator), denominator)
    return [int(first_gear_radius * denominator) // gcd_value, denominator // gcd_value]

# Test cases
print(solution([4, 30, 50]))  # Expected output: [12, 1]
print(solution([4, 17, 50]))  # Expected output: [-1, -1]


