package main

import (
    "fmt"
    "strings"
    type Subarray struct {
    elems map[int]bool
    sum int
    }

    func (s *Subarray) Add(num int) {
    v, _ := s.elems[num]
    if v == true {
        panic(string(num) + " already exists in Subarray")
    }
    s.elems[num] = true
    s.sum += num
}

func (s *Subarray) Remove(num int) {
    v, _ := s.elems[num]
    if v == false {
        panic(string(num) + " doesn't exist in Subarray")
    }
    s.elems[num] = false
    s.sum -= num
}

func (s *Subarray) Contains(num int) bool {
    v, _ := s.elems[num]
    return v
}

func (s *Subarray) Sum() int {
    return s.sum
}

func Max(a, b int) int {
    if b > a {
        return b
    }
    return a
}

func maximumUniqueSubarray(nums []int) int {
    var leftI, rightI, maxSum int
    subarr := Subarray{elems: map[int]bool{}}

    // variable window
    for ; rightI < len(nums); rightI++ {
        for subarr.Contains(nums[rightI]) {
            subarr.Remove(nums[leftI])
            leftI++
        }
        subarr.Add(nums[rightI])
        maxSum = Max(maxSum, subarr.Sum())
        // PrintNums(nums, leftI, rightI)
    }

    return maxSum
}

func PrintNums(nums []int, left, right int) {
    fmt.Println(nums)
    s := []rune(strings.Repeat(" ", 3 * len(nums)))
    s[left * 2 + 1] = rune("^"[0])
    s[right * 2 + 1] = rune("^"[0])
    fmt.Println(string(s))
}

func main() {
    nums := []int{5,2,1,2,5,2,1,2,5}
    maximumUniqueSubarray(nums)
}
)

