#include <iostream>  
#include <string>
#include <iomanip>

using namespace std;

int main() {
	for (int i = 2; i < 10; i++) {
		cout << setw(15) << endl;
		for (int j = 1; j < 10; j++) {
			cout << setw(15) << i << " X " << j << " = " << i * j;
			cout << endl;
		}
	}

}