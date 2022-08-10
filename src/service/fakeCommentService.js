export const comments = [
  {
    comment: "Пользуюсь данным приложением чуть больше месяца. В обращении достаточно простой и понятный. Регистрация быстрая, без заморочек.",
    username: "@lilu khai",
    profession: "English Teacher"
  },
  {
    comment: "Прочитала хорошие отзывы и решила тоже установить это чудо-приложение. С этим сложностей не возникло. Собственно за два месяца использования никаких проблем!",
    username: "@GBird",
    profession: "Unemployed"
  },
  {
    comment: "Круто. Юзабилити. Дизайн. Функциональность. Надежность. Качество.",
    username: "@a.n.Onim",
    profession: "Engineer"
  },
  {
    comment: "Этот отзыв я написала с помощью этого приложения. Оказалось действительно очень удобно. Очень круто! Удобно учиться, и бесплатно!",
    username: "@ZeroCool",
    profession: "Developer"
  },
]

export const fetchFakeUserData = async (id) => {
  return await fetch('https://fakeface.rest/face/json')
      .then(data => data.json())
      .then(json => (
        {
          photo: json.image_url,
          age: json.age,
          ...comments[id]
        }
      ))
      .catch(error => console.log(error))
}