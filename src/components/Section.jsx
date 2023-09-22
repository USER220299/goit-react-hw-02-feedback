import css from  './Section.module.css'

export const Section = (title, children) => {
  return <section>{<h2 className={css.title} title = {title}>Please leave feedback</h2>}</section>;
};
