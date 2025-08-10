package main

import (
	"fmt"
	"slices"
	"strconv"
)

func getPowersOf2() []int {
	list := []int{1}
	for i := 0; i <= 30; i++ {
		list = append(list, 1<<i)
	}
	return list
}

func sortedString(s string) string {
	runes := []rune(s)
	slices.Sort(runes)
	return string(runes)
}

func reorderedPowerOf2(n int) bool {
	allNums := [][]string{
		{},
		{"1", "2", "4", "8"},
		{"16", "32", "64"},
		{"128", "256", "512"},
		{"1024", "2048", "4096", "8192"},
		{"16384", "32768", "65536"},
		{"131072", "262144", "524288"},
		{"1048576", "2097152", "4194304", "8388608"},
		{"16777216", "33554432", "67108864"},
		{"134217728", "268435456", "536870912"},
		{"1073741824"},
	}
	nString := strconv.Itoa(n)
	nums := allNums[len(nString)]
	for i, num := range nums {
		nums[i] = sortedString(num)
	}
	return slices.Contains(nums, sortedString(nString))
}

func main() {
	list := []int{}
	retch := make(chan int)
	go getPowersOf2(retch)
	for n := range retch {
		list = append(list, n)
	}
	fmt.Println(list)
}
