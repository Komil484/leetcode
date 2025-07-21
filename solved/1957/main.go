import "strings"

func makeFancyString(s string) string {
    result := strings.Builder{}
    var prev rune
    count := 1
    for i, char := range s {
        if char == prev {
            count++
        } else {
            count = 1
        }
        if count <= 2 {
            result.WriteRune(char)
        }
        prev = char
    }
}
