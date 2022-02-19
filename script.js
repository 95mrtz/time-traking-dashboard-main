//get elements

const daily = document.getElementById("daily");

const weekly = document.getElementById("weekly");

const monthly = document.getElementById("monthly");

const title = document.getElementsByClassName("title");

const hours = document.getElementsByClassName("span-hrs");

const spanTitle = document.getElementsByClassName("span-title");

const prevHours = document.getElementsByClassName("span-prev");

//get  data

getData = () =>
  fetch("data.json")
    .then((res) => res.json())
    .catch((error) => {
      console.log(`this is the error: ${error}`);
    });

nameLoad = () => {
  getData().then((data) => {
    let titles = [];

    for (let i = 0; i < data.length; i++) {
      titles.push(data[i].title);
    }

    for (let i = 0; i < titles.length; i++) {
      let text = document.createTextNode(titles[i]);
      const content = document.createElement("p");
      title[i].appendChild(content);
      content.appendChild(text);
    }
  });
};

dailyLoad = () => {
  getData().then((data) => {
    infoLoad(data, "daily");
  });
};

weeklyLoad = () => {
  getData().then((data) => {
    infoLoad(data, "weekly");
  });
};

monthlyLoad = () => {
  getData().then((data) => {
    console.log(data);
    infoLoad(data, "monthly");
  });
};

infoLoad = (datos, dataTime) => {
  let times = [];
  for (let i = 0; i < datos.length; i++) {
    times.push(datos[i].timeframes);
  }

  switch (dataTime) {
    case "daily":
      for (let i = 0; i < times.length; i++) {
        console.log(times[i].objectData);
        hours[i].innerHTML = times[i].daily.current;
        spanTitle[i].innerHTML = "Day";
        prevHours[i].innerHTML =times[i].daily.previous;
      }
      break;
    case "weekly":
      for (let i = 0; i < times.length; i++) {
        console.log(times[i].objectData);
        hours[i].innerHTML = times[i].weekly.current;
        spanTitle[i].innerHTML = "Week";
        prevHours[i].innerHTML =times[i].weekly.previous;
      }
      break;
    case "monthly":
      for (let i = 0; i < times.length; i++) {
        console.log(times[i].objectData);
        hours[i].innerHTML = times[i].monthly.current;
        spanTitle[i].innerHTML = "Month";
        prevHours[i].innerHTML =times[i].monthly.previous;
      }
      break;
  }
};

window.addEventListener("load",() => {
  nameLoad();
});

window.addEventListener("load",() => {
  weekly.classList.remove('text-muted')
  daily.classList.add('text-muted')
  monthly.classList.add('text-muted')
  weeklyLoad();
});

daily.addEventListener("click", () => {
  daily.classList.remove('text-muted')
  weekly.classList.add('text-muted')
  monthly.classList.add('text-muted')
  dailyLoad();
});
weekly.addEventListener("click", () => {
  weekly.classList.remove('text-muted')
  daily.classList.add('text-muted')
  monthly.classList.add('text-muted')
  weeklyLoad();
});

monthly.addEventListener("click", () => {
    monthly.classList.remove('text-muted')
    daily.classList.add('text-muted')
    weekly.classList.add('text-muted')
    monthlyLoad();
});
