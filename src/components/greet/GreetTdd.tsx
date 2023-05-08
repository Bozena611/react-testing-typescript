import { GreetProps } from "./GreetTdd.types"

export const GreetTdd = (props: GreetProps) => {
	return (
		<div>Hello {props.name ? props.name : "Guest"}</div>
	)
}