# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def flipEquiv(self, root1, root2) -> bool:
        def count_children(node):
            return (node.left is not None) + (node.right is not None)

        def child_eq(node1, node2):
            if (node1 is None) != (node2 is None):
                return False
            return (node1 is None) or (node1.val == node2.val)

        def check_flipped(node1, node2):
            print(
                f"{(node1) if node1 is None else node1.val}, {(node2) if node2 is None else node2.val}"
            )
            children_count = count_children(node1)
            if children_count != count_children(node1):
                return False
            if children_count == 0:
                return True
            elif children_count == 1:
                node1_child = node1.left or node1.right
                node2_child = node2.left or node2.right
                if not child_eq(node1_child, node2_child):
                    return False
                return check_flipped(node1_child, node2_child)

            same = child_eq(node1.left, node2.left) and child_eq(
                node1.right, node2.right
            )
            if not (
                same
                or child_eq(node1.left, node2.right)
                and child_eq(node1.right, node2.left)
            ):
                return False
            if same:
                return check_flipped(node1.left, node2.left) and check_flipped(
                    node1.right, node2.right
                )
            return check_flipped(node1.left, node2.right) and check_flipped(
                node1.right, node2.left
            )

        if not child_eq(root1, root2):
            return False
        if not root1:
            return True
        return check_flipped(root1, root2)
