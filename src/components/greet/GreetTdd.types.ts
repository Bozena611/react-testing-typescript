export type GreetProps = {
	name?: string /* ? needed because line 10 in test file shows Typescript error,
										since there we are not passing the name it needs to be optional*/
}