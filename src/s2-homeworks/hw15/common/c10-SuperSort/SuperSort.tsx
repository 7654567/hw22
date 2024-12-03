import React from "react";

// добавить в проект иконки и импортировать
const downIcon = "[\\/]";
const upIcon = "[/\\]";
const noneIcon = "[--]";

export type SuperSortPropsType = {
	id?: string;
	sort: string;
	value: string;
	onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

	return sort === down ? up : sort === up ? "" : down;
	// if (sort === up) return down;
	// return "";
	// return up; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
	const up = "0" + value;
	const down = "1" + value;
	let s = pureChange(sort, down, up);

	const onChangeCallback = () => {
		console.log("s", s, "sor", sort);

		onChange(s);
	};

	const icon = s === down ? upIcon : s === up ? noneIcon : downIcon;

	return (
		<span id={id + "-sort-" + value} onClick={onChangeCallback}>
			{/*сделать иконку*/}
			{/* <img id={id + "-icon-" + sort} src={icon} /> */}
			{icon}
		</span>
	);
};

export default SuperSort;
