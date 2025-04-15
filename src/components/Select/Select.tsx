import React from "react";
import styles from "./Select.module.scss";
import arrow from "../../assets/images/arrow.svg";

type OptionValue = string | number;

interface Option {
  text: string;
  value: OptionValue;
}

interface SelectProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  options: Option[];
  name: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  className = "",
  ...rest
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [animationSpeed, setAnimationSpeed] = React.useState(0);
  const [text, setText] = React.useState<string>("");

  const elementRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);
  const timerIdRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    setText(options[0]?.text || "");
  }, []);

  React.useEffect(() => {
    if (elementRef.current) {
      const speed = getComputedStyle(elementRef.current)
        .getPropertyValue("--animation-speed")
        .trim();
      setAnimationSpeed(parseFloat(speed));
    }
  }, []);

  const clearTimer = () => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const showElement = () => {
    clearTimer();
    setHidden(false);
    setIsActive(true);
  };

  const hideElement = () => {
    setIsActive(false);
    clearTimer();

    timerIdRef.current = window.setTimeout(() => {
      setHidden(true);
    }, animationSpeed * 1000);
  };

  const toggle = () => (isActive ? hideElement() : showElement());

  const handleChooseValue = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target;

    if (target instanceof HTMLLIElement) {
      const value = target.dataset.value;
      if (!value) return;

      if (!selectRef.current) return;

      selectRef.current.value = value;

      setText(target.innerText || "");
      hideElement();
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        hideElement();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={elementRef} {...rest} className={`${styles.select} ${className}`}>
      <select
        ref={selectRef}
        name={name}
        className={styles.select__hidden}
        required
      >
        {options.map((el, i) => (
          <option key={i} value={el.value}>
            {el.text}
          </option>
        ))}
      </select>

      <div className={styles.select__container}>
        <div className={styles.select__input} onClick={toggle}>
          {text}
          <img
            className={`${styles.select__icon} ${
              isActive ? styles.select__icon_active : ""
            }`}
            src={arrow}
            draggable="false"
            alt="arrow"
          />
        </div>

        <div
          className={`${styles.select__dropdown} ${
            isActive ? styles.select__dropdown_active : ""
          } ${hidden ? styles.select__dropdown_hidden : ""}`}
        >
          <ul className={styles.select__list} onClick={handleChooseValue}>
            {options.map((el, i) => (
              <li data-value={el.value} key={i} className={styles.select__item}>
                {el.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
