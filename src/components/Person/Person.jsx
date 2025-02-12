export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__age">I am {person.age}</p>
      <p className="Person__partner">
        {person.isMarried
          ? `${person.name} is my ${person.sex === 'm' ? 'husband' : 'wife'}`
          : 'I am not married'}
      </p>
    </section>
  );
};
