class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        i = 0

        def parse():
            nonlocal i, expression
            match expression[i]:
                case "!":
                    return parse_not()
                case "&":
                    return parse_and()
                case "|":
                    return parse_or()
                case "t":
                    i += 1
                    return True
                case "f":
                    i += 1
                    return False
                case _:
                    raise ValueError

        def parse_not():
            nonlocal i, expression
            i += 2
            result = not parse()
            i += 1
            return result

        def parse_or():
            nonlocal i, expression
            i += 2
            while expression[i] != ")":
                if expression[i] == ",":
                    i += 1

                if parse():
                    jump_to_closing_parantheses()
                    i += 1
                    return True
            i += 1
            return False

        def parse_and():
            nonlocal i, expression
            i += 2
            while expression[i] != ")":
                if expression[i] == ",":
                    i += 1

                if not parse():
                    jump_to_closing_parantheses()
                    i += 1
                    return False
            i += 1
            return True

        def jump_to_closing_parantheses():
            nonlocal i, expression
            scope = 1
            i -= 1
            while scope > 0:
                i += 1
                if expression[i] == "(":
                    scope += 1
                elif expression[i] == ")":
                    scope -= 1

        return parse()


solve = Solution().parseBoolExpr

expression = "!(&(&(!(&(f)),&(t),|(f,f,t)),&(t),&(t,t,f)))"
print(solve(expression))
