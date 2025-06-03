#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
int main() 
{

    int n;
    scanf("%d", &n);
  	// Complete the code to print the pattern.
    int arr[2*n-1][2*n-1];
    int i,top=0,left=0,bottom=2*n-2,right=2*n-2;
    while(top<=bottom && left<=right){
        for(i=left;i<=right;i++) arr[top][i]=n;
        top++;
        for(i=top;i<=bottom;i++) arr[i][right]=n;
        right--;
        for(i=right;i>=left;i--) arr[bottom][i]=n;
        bottom--;
        for(i=bottom;i>=top;i--) arr[i][left] =n;
        left++;
        n--;
    }
    for(i=0;i<2*n-2;i++){
        for(int j=0;j<2*n-2;j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    return 0;
}