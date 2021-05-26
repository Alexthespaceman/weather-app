function weatherDescription(temperature, temp) {
  if (temperature >= 27) {
    return (
      <div classNam="temp">The Temperature today is a Scorching {temp}</div>
    );
  }
  if (temperature >= 23 && temperature <= 26) {
    return <div classNam="temp">The Temperature today is a boiling {temp}</div>;
  }
  if (temperature >= 18 && temperature <= 22) {
    return <div classNam="temp">The Temperature today is a hot {temp}</div>;
  }
  if (temperature >= 12 && temperature <= 17) {
    return <div classNam="temp">The Temperature today is a balmy {temp}</div>;
  }
  if (temperature >= 9 && temperature <= 11) {
    return <div classNam="temp">The Temperature today is a chilly {temp}</div>;
  }
  if (temperature >= 6 && temperature <= 8) {
    return <div classNam="temp">The Temperature today is a cold {temp}</div>;
  }
  if (temperature >= 1 && temperature <= 5) {
    return (
      <div classNam="temp">The Temperature today is a freezing {temp}</div>
    );
  }
  if (temperature < 0) {
    return (
      <div classNam="temp">
        The Temperature today is a an incredibly cold -{temp}
      </div>
    );
  }
}

export default weatherDescription;
