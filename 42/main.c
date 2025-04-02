int trap(int *height, int heightSize)
{
    int total = 0;
    int max_height_i = 0;
    for (int i = 0; i < heightSize; ++i) {
        if (height[i] > height[max_height_i]) {
            max_height_i = i;
        }
    }

    int edge_i = 0;
    for (int i = 0; i < max_height_i; ++i) {
        if (height[edge_i] > height[i]) {
            total += height[edge_i] - height[i];
        } else {
            edge_i = i;
        }
    }

    edge_i = heightSize - 1;
    for (int i = heightSize - 1; i > max_height_i; --i) {
        if (height[edge_i] > height[i]) {
            total += height[edge_i] - height[i];
        } else {
            edge_i = i;
        }
    }
    return total;
}
