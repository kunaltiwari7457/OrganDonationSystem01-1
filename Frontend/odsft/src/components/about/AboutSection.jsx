import React from 'react';
import './AboutSection.css';

import { useNavigate } from 'react-router-dom';

const AboutSection = () => {

  const navigate2 = useNavigate();
    
  const navigate3 = useNavigate();

  const handleLearnClick = () => {
    navigate2('/db'); // /learn 
  };

  const handleBodyclick = () => {
    navigate3('/bds');
  }


  return (
    <><div className="about-section" id="about">
      <div className="container  flex-center">
        <h1 class="section-title-01">ABOUT&nbsp;US</h1>
        <h2 class="section-title-02">Who&nbsp;We&nbsp;Are</h2>
      </div>

      <div className="about-content">

        <p>
          The Organ Receiving & Giving Awareness Network (ORGAN) India, is an initiative that was
          launched in March 2013 by The Parashar Foundation, (a Delhi-based NGO) to address the
          dismal state of deceased organ donation in India. We seek to remedy this shortage of organ
          donors, and help create an ecosystem to facilitate organ donation in India.
        </p>
        <p>
          The Parashar Foundation was set up in 2000 by the late Ashok Parashar to help the poor and
          less fortunate by providing funds to various schools, health centers and other organisations.
          While our previous work was primarily in the form of donations to various causes, we now have a
          clear goal - to create widespread awareness on organ donation in Delhi, which will benefit
          everyone, regardless of religion, age, sex, caste, or social standing.
        </p>
        <p>
          For the Parashar Foundation, it is a goal that stems from a personal struggle of one of its
          members. Kirti Parashar, Ashok Parashar's wife, who needed a heart transplant. She had
          the means, the best doctors and a family who supported her.
        </p>
        <p>
          But there was no heart to be found in Delhi and the wait could have been endless. Kirti
          Parashar moved to Chennai (which has a well-organised network in place), to wait for a new
          heart, which she got on December 13th after a four month wait! She could afford to move and
          wait. ORGAN India was formed for the people of India who don't have the option of
          leaving their jobs and lives and moving to another city in search of an organ transplant.
        </p>
        <div className="trustees">
          <h3>Trustees: Parashar Foundation</h3>
          <ul>
            <li>Anika Parashar</li>
            <li>Kirti Parashar</li>
            <li>Vidur Parashar</li>
            <li>Captain Pran Nath Parashar</li>
          </ul><br />
          <p> <b> Chief Executive Officer - </b>Sunayana Singh
            <br /><br />
            <b> Project Manager -</b> Dr. Sourabh Sharma
            <br /><br />
            <b>Chief Advisor -</b> Eeda Gujral Chopra</p>
        </div>

        <div className="right">
          <div className="r1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4BX5fFwVYc2s6-Xrl4P4PwC4LygUzQDCPg&s"
              alt="brain"
              className="brain" />
            <h2>What Is Organ Donation</h2>
            <p>
              Organ donation is the process of donating organs or biological
              tissue to a living recipient, who is in need of a transplant. What is
              brain death? And how is it related to organ donation? Everything you
              need to know and more
            </p>
            <button className="details-btn"  onClick={handleLearnClick} >Details</button>
          </div>

          <div className="r2">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMSEhIWFRUWGBUWFxgYGBUVFRgeFRgYGBYXFxcdHSggGRolHhcYITIhJSorLy4uGCAzODMtNyguLisBCgoKDg0OGxAQGy8lICUtLS0tLS0rLS0tLy0tLS0tLS01LS8tLS0tLS0vLS4tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQkAvgMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAMFBgIBB//EAEUQAAIBAgMFBQQGBwYGAwAAAAECAwARBBIhBQYxQVETImFxkTJCgaEjUpKxwdEHFFNicuHwQ4KissLSJDNjc5PTFRbi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EADgRAAIBAgQCCAUCBgMBAQAAAAABAgMRBBIhMUFRBRMyYXGBkfAiobHB0SPhBhQzQlLxJGJywhX/2gAMAwEAAhEDEQA/APuNAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAZv9IM8iYMmNnVjNhE7jmNyJMTEjKHGq3DEX8aAzz7xYvAyYXCzOjvJKt1f6RxFiMV2USiYyIXdFOpCSHQZsoIYgTLt/GM2zZXngjinxEsbKI3CkBHEcbO0ntsUNrAd5k0bKQwE2yN5cTisBjZA8XbwrJlMS541IjzhVZZXEh6G6nUZkB0IFbszeXEDELIMRHPE6bMSSwcqTiGxCF4QJCI2uve0bNlA0tQEGF36xGICOs8Eca4jDBpOzATs51lssgE7ZbMgXVla7AFVIIIGp2rvFJHj48LnhjQpE9pFkaWcyPIrrBlOhQIGPdb2xfKNaAz2yd+8ViQiwthyZJ441kMZKhJMPiJtY0xDd4NABqynUgqpFAN7Y3klbCbIxfbR4YzuryM5f8AVxnwk7kSKHUsgYAgFuIXXSgPNib7YqfE4WFoooxJFA7xtYSntYTI0kd5A2RWstuzbg12BsKAW3h3sxC43s1K2w88gGGTOJ5wmAlmVmOazRs5ygZfaQG5tYAGH32xkiARPhHJdwJ1jlMDBMIMSyqna3LK10JznyBBWgI8Xv3iJWligMYb9VeQAJeSOQYVMQLfS5nBzEC8YW9rM2VloBjA774gzRRKYJx2SOcuVXnvC8hlh+mJyh1CEBGF1e7A2WgHf0e7bkxc+Kd545R2OCYCHOIULicuqqztZgRlY6XKC4BFgBuKAKAKAKAKAKAKAKAKAKAKAKAKAKALUAUAUAUAUB5QBegAGgCgPaAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKA5LUPLi+KxaRqXdgqjiSbAUbSV2EnJ2RmcZviSAcNh2lUgkSMyxx6G2t+9YngbWNqolXtsaYYWTItnbw414xI8EIuWBQMxYZWK6OCQb2ve3OqniJp6WaLFhoWs7plrgN5Y3YJIphc8AxBQ+Cvw9bVbDERlo9GVVMNOOq1Reh6vM9zoGh6e0AUAUAUAUAUAUAUAUAUAUAUAUAUBit5tszjFdgkjRKsTOCoUlmCM4uT7vdtp4/Dp4XD03R6xq7ul4a2OJjcVVWI6qLssreltXZvjw0LTdnbck2HR5I3ZtQWVRlbKSL8fXxvWXF0o0qrjHY3dH151qEZz3LJtof8ASl+yPzrObCJtof8ASl+yPzoRMMNr/rspmIbskaRIASFRcllaZur3JsTooW/EiqIR66qoN7+9O9mmcv5ehKra9rb7b2u3yXHuHSnHqCNe+urs+mXOToQeJ1DA3A4wr0oKEakE1dtWfdbXhpqXYXEVZVZUajUmkneKstb6cbPT9h7ZwITW/tScTc+21iT5VnLZu7INrYQOuvPT48jVclclTk0xjczbDODBIbsgupPEgGxU+WnwPhWrCVXL4HwM+MoqPxx2Zq0ethiJQa8JHtAFAFAFAFAFAFAFAFAFAFAFAFAI7R2TBPbto1e3AniPC41t4VbTrVKfYdiithqVa3WRTsTIiooVQFUCwAFgB0AqDbbuyxJRVoqyOGavCLZUbzYsxYTEyDikMjD4KTUanZZKl20ZHZkZhjiUBVCRpGO7pmNiyhtM5zi99OJvXOcnmujvRhHq1BrxXkNCxAIKsvCwC5L3A1Ue9cEWBNj1JAr2pUlUeabv46kKVGnRWSnBRXcrFhs1wIgSRYFwTe4uGYE+oOleFNRXmyq2jvVhFbszMua/UenSvHdrYJWerFd38R/xcbDTMzf4wfzqOHdqqLMTH9Bn0hHrrnDTJkavCaZMDXhM9oAoAoAoAoAoAoAoAoAoAoAoDh2oeMXdqkQbIGahC5WbdiEmHmjJtnR0+0CKhVaUGTo61FYS2djFkTDZY4808echl7kaRqpclRa7ZmAtpzPK1QUYvgaXOS4v1PMHtqCa0sHZzQmf9Ul+iyMj6AcfaW7KPJr3Ne5I8jxVJPi/UoN7MGskzxdo0Uaqr2QldCLkadSa59V2qOx0KOtNNlcNkYCG8CIvbCNpLHWQqrFCzXvcZhl6k8ra1sngpZG83xWvbyvvzsYKfSK6xJQtBvLm77223tfS9/Kwbu4qBZ4vpI1VTf2lCiwJHPTXSsVBPrU2dHEtdTJRPoi7Vg/bR/bX8665wiZNrQfto/tr+dRJIr595XMgWARMmfs8zO12YAEhcqmw19o9CTYC9bIYWOTNNva+iW3r78TFUxk1UywS3tq3v5J+78DQbOxizRJKt7OoYA8RfkfEVlqQcJOL4G6lUVSCmuKuM1AsCgCgCgCgCgCgCgCgCgPGNDxi8jV6QbFnavSDZCzVIg2I7TUmNrcQLj4G5+V6oxEbwNGEnaprxEthbPDrG8TlHhaQZrBh9KQ7Rsp93UWseFRpO8UX1VaTRZY2OLDxGWQKscOaXKiCNC2pLlRe7XPXib1NsgkYDATnEDDYiU37Zpbn2bZZ5MoHTQgf3a51b+odKg7UmjUS4eEa2uSLe017HjfXxJ63JPEk1oeKqOnkb4W21tyvuYoYKkqvWJa3vu7X522v5GUxceebs0FszBQByvp6XvWHLmlZHVz5YZnw1PpKP413T5m5Oj14SK7E7CV5GdZGTPfOoWNla4AJsymxIAB/ma0QxLjFRavbbf7NGaeDUpOSk1fdWTT9Uy9wUKxosaCyqAoHgNBWacnKTk92bqcFCKjHZE9RJhQBQBQBQBQBQBQBQBQEUjV6RYrI1elbYu7VIg2QM1CDZC5vXjV1Y8UnF3Rj9r7MmCYsQO6SdnDJFkYq2aNpS1iD7wyrbyrJCEoJxZ05VI1LSRrcDiY8bg17YFknjF9CLiRQePI6/KrdyGxlH2MsMgw4l+ihsY1JAbvXZrknjcn+Vc+sr1GdGg7U00tx6XEKATmBsL2BBqDdj1Jsg3Y2cS/6w401y+JJIJty4H1rVhKLbzvyMnSGISXVR34mrVq6ByCdGoTTGI2qJNDMTV4WJk4rwme0AUAUAUAUAUAUAUB4xoeMWlavSDFZGqRWxd2r0g2QMaECNjXp4Jz4pYZElcEpZo2sCWGaxDWGreyRYa97S5FjTVajZvwNWFvK8V4/kttmxIUDQFSlyylbZWzd7MCNDqSeHG9eF5Q7awzvJIiqwYlczkQ9noqi4OXtGPxFYa3aaX2N1F2im/vf8FNtaCOJBGmpJ4c3PU+FZ5LgjTCTerNLgIezjRPqqAfPmfW9dqnDJBRPmq1TrKjnzY2rVIiiZGoSTGIzXjJoZiavCxMaQ1EsR3Q9CgCgCgCgCgCgCgI5TXpFikrV6VtishqRW2LuaECFjXpFsjY0IiG2VvDJ5X+zr+FU4lXpSNGCllrw8fqUmGxMuDfPG/dfVgRdH/iW+j298a9c1gBzadaVPR6o7tShGpqtGM7T3hlckLHkLebcrd0WBNRqVHJ3SJU8Plj8Qlg8IwmiLm7Mbm+p7uov+Qr2hG9WNyOKnahO3L66GtBrsnzKJFNCSKuXashkdYuzAjYIc4csxKO+ltAPo2FbYYaCgnO+qvpbml9zFLE1HUcYW0dtb8m/sXWzcUJY0kAtmANul+IrJUg4TcXwN1GoqkFNcSwjNVGhMbiNeFiJ68JhQBQBQBQBQBQAaAXlNekGJyNUkVMWkNelbIHNCLIWNekWQyyBRdiAPGvJSUVdnkYyk8sVdib55wURSEOjO2mnOw/P0NYqtfOnGK05nTw+D6qSnUeq2SO9pYZclrXAFtRflppWRo6EZO5mdjxHt10I7h4rKvT67HXz14+Nes6OJf6S/f36lvj8PIro6gFkvoed+nzqKbhJSXAwOMakHCWzHMJtRGOVro/1W0v5HnXSpYqE9Hozi18DUparVc1+CxU1oMgniNkI758zoSQWyNYMQCoJ042Zhp1NaYYqcI5bJ+PqZ54SE55rtc7Pfh9Gy2wyBVCqLAAADoBwFZpScndmuCUUktkNxmosuQ3EaiWRGlrwsPaAKAKAKAKAX2hi1hieVr2RSxtxNuQ8TU6cHOSiuJXWqKlBzeyVzNbO3uLvEJURUmLBCrMSpUKbPdQD7QFxpe45G22rglGMnFu8d7r6a/U5tDpJzlFSStLaz48noufDiXkuKT66/aH51hOixSTFJ9dftCvStiz4lPrr9oV6VsTxe04Y/blQeGYX9BrUZVIw7TJQo1KnZQi21FY910QdWILfBeXx9KyTxT2gbqWAS1qO/cvySxYjDg3Mqs3ViD6DgPhWdybd5amuMFFWirDB2lEf7QH40bZ7lsQ4rFxspUOpJ8RRRcmklqw5KCcpbLcpdkbNyTowZDZSDZEQi2XXRiQL2FjY6jxq6rhnBZlJPWztwfp89ib6RVZKnKEotq8c39y5rV23Wj11NG8qcCQfnWe6IpMVxCQMLNa39da8diaclsJNMI/+XOLfVc3X4a3FThXnDZ+pXUwtOrrKOvNaDGC29G2jnIfiVPiG/OtdPGQl2tH8jBV6OqQ1hqvn6F1BKGF1II6ggitKaaujG4uLs1YbjNekkxuI1EsQ3GaiWo7oehQBQBQBQEWLw6yI0bi6sCpHgdKlGTjJSW6IVIRnFxlsygwu60cbo7uZOyGWMMsYCjlmKqC9vHmSa1VMZKcXFK1999fXYw0uj4U5xm3fLtotPRaj8uHj+ov2R+VZTW2KyYdPqL9kV7YrbZROP1hmEYVIl0LgDM/LunkvlxrDVrubtDRczpUcNGmlKpq3w5EsGx4E9mNfOwvWdJI0ube5IdnRH+zX0r0jcVxezIFF8iDzVfyrxk4tsze1to4OIapGT/CB6WFzUFeWxb2e0zLrvasbXij9QtvQ1fTpTg1JPUpq1YTTg43T0Lrbm8ZhUGNAM2jWeFicwudV14qDfU6C7dbqlZ1k4JKPF24s9eAjhkqspSm18KzW+FcvlvqV+z96IGP0qkeZNvUVklQa7yyNdS7jabKgwswuo+F/51FRixKc1qWg2TCPcHoPyqWRFfWyIsRslCNFB+AB+BFeOCPVUZUS4R4T2kLEW4j+uI8DUVmg7xZY8tRZZq5o939ricENo68QOBH1hXSw9frFZ7nJxWFdGV1sy+iNXmdDaOALk2A1vyryxYnZHmEx0Ut+ykR7ccrBredqlOnOHaTXieU61Op2JJ+DuMVAsCgCgCgCgIZTXqIsSlNelTKTeDElUCKe9Icg6ge+fgPvFUYmplhZbsvwlLPUu9lr+DuGERoqAWsBfz/kLfOsdrKxubzO51XgIsZiFjW7cbX8AOp/Af0TaS1PYpydkYfeHa7sQgPfcXVTwVf2snQdBz8hc+KLlrLY2UaTlLJDzfL9zOthl1Nyzc2PE/kPCpvY7lGjCl2d+fFlTtLDXVSq3bNlsBqbgn5ZfmanTfA5/S1BNRqJa3sW29z5o1s2axBNnD8jqQEHqLCo038RTjIN0UkuPJFruxCqI6x5FlAXVsw0IQ8V73HtL26rfgLbMNJWla2bS2a1rcd9ORn6UoZJUoyU3RSlmVO+bPpZu2trX8xTauIaHENJhiAmhKj2b2Ga1jYHy0JvyNUYnq5VHl25r5+VyWDwdd4WLn27ap7tX0vwzWsbPd7bb4hBZ47+Kt/u41nvZ2ZllB2ui5yzfWj+y3+6vdCvUQxUUob2o9dfZb/dUXYsi3Yoy8uGnWRSluNgrWIOjL7X9aVGM1TmpItnB1qbizewGYgEPEQQCDkfUHh79de99ThWs7M52rh8Q8RAMbWZGKqhuwVgWXvMQbgcDx4VbQlGM7y7/oV4mMpUrR5rTmk9UJbt4ZjMrrE8SqGBzRiPQqAUHN8zjP4WrTiZJQyuSbfJ34791loY8HBuopKLSXNW4bd938Xca+uedcKAKAKAKAWmNelbE5TUkVszzfSYw31WFR6kZj+Arn1nmq24L/Z0sPHJQvxk/wBh4m+tVlgAgXY8ALnx6D1oubD5GQ3h2oqiSWTVI7Er+0dvYj8uvgG6VCKzy1L2+rhpu9jJRs/eeQ3llOeQ+fsqOgAtp0t0q1u7O5haKw9JJ78fH9j2NCwbLqR5DiC3Pl3WPwPxPRHueLk03pvoTwuMOquVvISpTgSGYd3KBxDK9ieVzy1r2nCU5KEd2U47EU4UnVn2Y39+opGzXkDxBVJADZlY5TxXKDcE/cDWnEYKpR7frzOf0V0rS6RnKNJPRX480tXa3O1mcYYli+YC9gCBpYoqltOItr6VjvZndk1a0iQk3YEHiRytpp+FekKcnq+/8EeAxjYacEGyORfoDyPx4GvJRzLTdHOx9JQmqi2lo/HmfWNnYoSoGHxqMXdHLnHK7HGP934/hRiBR7cXuqeht6g/lVUzRS3NHujic+HUHihKemo+RA+FdLCTzU7ctDk42GWs+/U0cRrQUIaFRLD2gCgCgCgPDQCsxr0rkJyGpIqZQbM/5uK65z8in4VzJduZ1l/Sh4DEct2YdP6NQJtaEO1sRkj9WP8AdHd+ZNeydontNXkfM9uTdpiIcOT3Yx2sni7gNr5JlHnm61OCyw8TZhafW4nujr+PnqcSMSSefH1/CvDuu/AlwsgF3v7Oo5ENrbXkRqddDltzrx6FVSSmklu/f7C6yl5oLC5LSAADmwHeA663rZ0fVVOvFvjp4HJ/iHByrdHTjF6qz2vfu9WWke6eJaQCYKserAXVix0BUgEgAEi5PVRrW+pOlLEuvNrIrb7Xta2vqcGGIq4bomGCpJxrSvfLvZO97ruajv8AZO7bdsyKzGZRK1ywygKSdTmOjXudTbjyqOIrwSlSjBLhfRvx4/XzKsBhqjlTxNSrKWqbV2lpwtdelrdxj+07zJYgqxVr6aroQOutx8D4VyMtj7lVoz0j7RDtCIOhHp/XmKLR3Pa0I1qUoe7/AOzXfo72pnjysdeB8xpf/L86rccs2kfOXzQTe6NJipgW0IsNK8Z5HRFJtycd1Lj6x+4fjVcy+kuJc7jv3ZdR7S/cf5VtwXZZz+ke1E0mP2lHBE0rm4XkNSSTYAV0aVKVWahHicutXjRpupLZEeyd4O0l7GSLsnIZl76yA5SVYXHBgQbjwNWVcNlhni7rwt7RXQxmep1c42e61vtv5riXtZTeFAFAFAeNQ8YpNXpXITkqSK2UGHbLjJU+uoI+K5T8wK51RWrNczqUXmw8Xy/IliMUYpgT7LXHgCDfXzv8qzt2ZqjHNE82xJnCg6BmRfgWua9lroKay6nzDBu00s84tdnZiD0J/wD1ar58EdHoqFoSqc3b0GXlI4qL+N/yNeG6T45fnw98COSa/AfLW3TwH5V5voTSUVn+i56F1uROqTSSNrlAC903BfTTqTawtrqetSjoYcdUzRtfS/v3zNVJtC5UyXDsTZAFORMoYE3BuWIQnpa2mt7YVt4uKlF6u/NeHn4+hwpYbrqjlCUouOiaS2dr3unvv3WW2pDiVh7ciQWJQMrgdoVKk6OvMsCOnD96vKtStK899dttLfb3sShho0bU6b9ef768vVox20cEolZlAJku5zKLa5idPd71xb5VWnL+471CzgrWuvh2utGxKaNfqpfnYDT+tK8bfM1QhG93FcnoMbkhBiZIyqkGzC4B9rT8R6V5UbsmcGrTUK1SNu9eepusUsMYuY0vyGVbn5cKqc2uJCME+Bn5IUYliiXP7q/lVTlLmaFCK4Gy3O2dF2BYxoczsdVXgAB08DXTwifV3fM4+Pf6tlwRd43YkM0bRlFS/BlVQwI1BGnyrdRqulNTRzq9FV6bpy4hsfd8pKJpZe0ZVKIAuVVBJJPEknU+V/K1lbEqUMkVZN3fEroYNxqdZOV2lZaWS+poKyHQCgCgCgEdtzukErxi7qjFeeoHG3O3G3hVtGMZVIqW1yjEzlClKUN0nYwmy9oyh8MVd5Gkz9onaiS4AUhrE2Q6t0tltyJPUr0oZJ3VrWtpby7/AJ8zhYatUz07NtyvmV7+fdx5cjTSYp/2En2of/ZXJO2zLYvESHEmURPYHJa8fIcfb+teuZX1qt37jsYZZaKjbfX35HO2JGkViIX5MNY+Q19/zqqSTW5dTbi9ioi2k7ROhjYtGHIN4+Ajcj3uWleU7NpXJ1FZN2Mbs1jHHE4RtQb6rqCSOvhWiXaOrgrxw0bJ/L8lhmYe42tjxTnz9rpavC9ScVqnr4fkhmdsp7hFvFOPPn4/Olke5pt9nbXdbk+x9ovE5yoc10ZTdLAoTa+vPNarKVLrM3ctfB6M5fS0l+m5aJt721la8Vv3ebNzs4IU7UqA7gtlYgsWuRpY63IHs63a/MCtuFoR6uKUW027vl731Pn+kcXOFWd5KLhFZYtXze3ppqmd7QjSJ762ftFJGpBNmDW6DK2o4eWtZcySeu1vv+TqWvZvin6uz+VjL72RaxyKCAbrYixNgNel9DeqZnV6PqaNW7/fv0KBIixsOPPwHU1BHRlFXuibY/cxin9w/wCFgaT7HmcjHx/5EWuMfobLZEH6xM7Pqq8vw8uXwrPFZmZZvJGyJdu4ZVOZAAL5SBw8D8jXs0uApSb0Ze7mTXhZfqsfRrH7710MFK8LcmcvpCNqqfNGoirUY0OR1EtR3Q9CgCgCgOXoeMrBhI0JZI0UtxKqAT5kDWrHOUlZtszqlCLbikn4EctDyRSwwgo55mWX/Ncfea5U1q33s7EHZRXchOqy4ykKfTFPrKyfev8AqqunpNGiprTZmsKb4aH+G3ozfnWqe52MD/Qh4IkjxRyhSL20B526eNRuaLPZEcs/WwFNWEow4iM+OAvksbgg3GltD+ArVhK88PPNG21tTjdMYejjqSpSb0d7rwa4rvLHdHeSdZo4jISkjotuJGd1U2N+hPG/CvJatva5gwslJOM9csXa+r07zY4jbuHw08gljlkawsQIytrg5bFhzAJ05WrHUjUb+Fq3vuNFWlKolbuMlvXvMMS6dlF2SJfRrZmvYXYDQWt48eNe0aLjfM9y+g50tbimz8epGU6Hj51Y1Y6dKvGbtsxnZ+uKB6I5+YFVz7D8TDj/AOtDwf2Nxue1o5Dztf1JNV0+Jz6+6J9rL9E3hl+8D8aS2PKfaGtxjrMP+3/rrXgf7vL7mTpL+3z+xsoq3HNQ5HUS1HdD0KAKAKA5koeMTlqRWxSSpFUih2biReaM8pH9Q7W9VNcpv4pLvf1Oyo/BCS5L6C+IYLmJ4C59Krehalcy0bESpJb2WzHyuD94FVLe5qdstjEYh3ilfDD3JZEHO9mIHx/lW9wvqe4PGuMFS48ByPZ44uSzefdHl1qJvyN6yd2TjDoPdX0FCWSPIrpECtoBa9j+Hzt614RklHUt9lSL2kbkLo6EkgaWYG4PKvU9TypBOL04Mvd4dktLimAUi4He5fz8hQppuPVpsVxG6PdsZCG8U0++9eZrHl09jPbRwDJ3XWzgcuGnMHobX+Nepl9lKN1uTbsZpWkcA3yqg663J+dVVlZKKOdLE9fUdR7JJG43bcKxTky2HwGlUQepGsrq43tU/RN45fvFSlsQp9oa3GXWY/8AbH+eteBXa8vuY+kn2V4/Y2UVbjmobjqJaiShIKAKAKA5koeMTlqRVITkqRXIxG0sNOk8jojWLE3AzAjxtXJrUqnWNpM7eHrUnSjFyV0vAUxEk7jKUa3QIw9apcaj4P0NCnSjrmXqh/Yez2+k7RCAy5RcWJDe1p8BW3CUH8WdbqxzOkMXH4VTlezvp3bGL29gsuPzn34u0/vqDG/+JGPxrxXy2Z0sElKvmXK69+DIaidojmlyjx5UBWS8h1P3a/150RXU2tzJ1xQUZbXPqdfChJySPou5uPaeAySe0D2d7g3y8T56i/xqSRzKjV7LYucUl0byJ9KPY8g7SRh97lFo253IHpe331BHQovWwz+jbA2UuR9ZvtHKvyB9auoLNWb5I+bx0uro5Fxb9F7Q62DlikusbWVjYgEggHTUdRWOdGcJP4WbaeJpVIK8le3Mlx8sktlWJwL39k3v8Ki4zeyfoThKEd5L1L/c/CvGsmdCtytr6E2B5VvwcJRTzKxzcfVhOSyu5qIq1GNDcdRLESUJBQBQBQHMlDxictSK5FFtTawjkSFEaSV9QoIXTXUk8OB9DWqlh3OLm3ZLiYMRilTmqaV5Pgc7Px6TxiRL21BB4gjiD/XOoVqMqU8shRrxrQzxJHqsmyE16RZh98YvpI2A1WR0FuJGIjzAfbjb7Vc6ppOS96n0vRcv6cu5r0/axTbT2fNCgdk0PO4NuHGx4agX4XIHMAznQqQV5L39vM6eH6Rw2In1dKd356rmua8Cp2lF2SjtGAlcBlQ3uFPvOfduAbKLk9AKzxbk9FoHjYt/D2VxfPkuZWx4eaZvoVZzwJVWAXzJ4Vco3dimWLTvKKb8Pyy4wOxGkkSAsIs5tdbtoNSTwJNgedaMRh3h5qLd9LkMJiFjsHUrRvFxdvp+T6lsvZ8eHiSGIWRBYX4m+pY+JOtZ2VxjlVjvGyWU9ToPxqMnoW01eR8838mP0QHAE6/vMBYdeH31CLTdjS6ippyZtd0cNkgt4gfZAH33rTg18LlzZ8x0pL9SMeS+pfpWs56J0rwmhmOhZEbiqJYhyOolqO6HoUAUAUBy9DxictSRXIoNq7LdpVnikCSKApzLmVgGzAEctf6Fa6NeMYOnNXXpbgc+vhpSqKrTlZrTa6avcXwWxkjTKSxYksxDOgJPHuqwA/lUK9brZ5j3D0ephl34vxOnwCfv/wDkl/3VSWNkTYFP3/8AyS/7q9sRbMjvnGIryLe8fYSjM7sLpOtr3bpcfGsNVtV9OR2cElLD6/5W8mtSixO8CuWiwsR7WYxmRpLNGvZkEH2iGIt0UeHsgXVakJwlZNZtXr9PMup4KsqlOi6ilkTjGytZNWvJ68OC4+JWY6AZ2ndu2kvncyDuORyKixC6WABHLyrJmsrI71PoiiopNt++R9DwuPjeCKRECBoycgAAW6+yNBexvUoO8kY6lOUYSi+/5FHhmAx6E6DtJP8AVXS6T7cP/Jj/AIf16PxCX+a/+TS7a2wIoyU7zHQXBsNCbnroK5uY30MO6k0nojIHeacNmks6+9pZlHVbaG3Gx49RUGzoywaUfg37y1leLE/q/ZwLPEe1+kZlRgyC4IU94FnuLLbKAL6EV0MLhoOmpSV79p3fw/bRa958Rj8ZWVacXKzi/hhZfE7Lz3002tc0OxmcRAKgZcz2Oa1xnIBtbpVeF0pK3f8AUj0g713fu+hYrLJ+zH2/5VoMqsLbbxE4gkKJlNhqrXIFxcgW6c+VaMIoSrRU9jPjXONCThv7uR7FcDFKsDZoijGTvF1uGbI1yTYnu8weN1XhWnEJ9S3UVnfTS3jy98WUYZpYhRpO8bO+t+Ls+Or9pGwirlnZQ5HUS1HdD0KAKAKA8ah4xSapFchOQV6VsWkr0qYu1ekSI16QZ89/SJie7KPFE9CGPzB9K5k3mxD7jvYeOTCLv1+f4Mlu/oJm55VUeTE3/wAtSqHW6Gis05eH3PNqEGwB1zAEeB5251VxO5NtRbXJmrwmNtCI44EIVbZlD5xYW1sLX0ubnW9bo9GuFVSqVElw1+35R8bU6R62Muqpyctb6KyfG8vwcYkn9Y7ts2eSxPKx8vGt+OrQi4wqRurX7/Up6FwdSph61WlVcGpWtvF7br7nO2J3dHEjGMopdLLmzMARa4OgsfHQkEViqxouk5UY353esfLl3m7C1MXDExjiJW10slll5u7v/wBdHxRVuAdRqpJAPIgacefnWA+tHd3sSBgmGXRWY3HOxupbrYkamvFqrHMxMYpyk1/s3m7cl4iv1WPz1/OtWClenbkz5HpOFq2bmv2LpK1mAnSvCSJ4EA4ADyFqNt7k4pLYdiqJdEbjqJYjuh6FAFAFAeGgFZa9K5GP3jlP6yiSHLEY7r3si5s1iWOdM1hyzeXGunhYrqnKPavyvpbwe/gcbGSfXqM3aNudle/itlwuc7v4mYwjMpkGZgrXAzKOB72p51VjYwjVtHlr4lmAlOVK83xdnzQ680n7I/aWspqaIjK/7I/aWhBpHyveyV5pIo1XvSyEi5FrsQFv0Herl0dZSkfR1ItRhTS97DOyt1nRxc3FwHGYANpcKvO5bKL+Jq+CjOcYydldGtOpg6FSpSWaWVtLvWxYYzY0L/StD2fZylbowfOgHdJA4G5vrqMpuTmFr68epj1mTLJOyT1uuevLnszFhMXPEzdB1uthKN5OyWV3Xw6W0aurbpXHHmyx5Y5AIyGtca35qOAHEHhzrlUqk+ts9bu+t3xOrUhFUmlpZcPArMcpM4A49pLzt053FufOu10rfNG3+P3Of/Da/wCFX/8Aa+w7iI86IHXUqCwvqCdNLaE8T8Ryrj05TVXNF2y/VnUnTVSDhNXuY/G4PExHscpK8EYWykMSR3+A48+FTszoQrRUNeA/tuFsNgooVY3kYmQ6AG12Kj3rXK687eNW00cfpGo8vizbblYnMP440f04/wCavcG8tSUfen+zj9JrNShP3qv2NaldA46J468JoZjFeMmhuKvGWxG0qJYjqh6FAFAFAFALSivSDEcRGGFmAI6EAipxbT0KZRT0Yu4oVsXcV6RYpjZMqO3RSflUKkssGyVKGepGPNo+ZRwCXaEQPCKPtLciQdNeWpU38K5lBWgfTZc9ddyuW+1puzTMNGup1N7+9a3HgRr4VNo6cWQ//KOw+kXPfgwN7aciTpQkoRWyJXxMZiJKlbMARqdWVuHhdRVcaceugkuJTW+GEm3/AGv5FdipFXFZm9nM97X6t016V2OlF8UH3HM/hqSeDrR/7r52/A9jNrhCQq3zIhHkUW2vGuNS/u8fwdmMdPX6lOZc6kyPe2gFwLadPl8KtJHu+kd4IGsSQ2UsfFToPDT5VOG5zMevgT7/ALF1+jqa6xfwuvoSfwqNLTEeJzMUs2Evyf3PoSCukcVE8YrwmhqOvGWIbiFeFsRpaiWHtAFAFAFAFAQyivURYnKK9RUxSQVIqYu4oQZXbTsQEOuY3I6hdfvK1mxcrQy8zZgIXqOXJfN+2YDZYH65jOF1SJADwIa5b43RfnWWn2EfQYZXrSfge7xRm6HkFW9uXcT04HXwqTOhT+7+okq/VjsP4ih+/XzrwmMKR2eXLYlwx1zeyO7rc/WPpXS6NwjnUVaWy273+31Pmun+kOrj/Lweslr3Ll5/QXxKZxcG5Hx8xXTxdCOIp/A9Vt+DkdF42p0fWtVTUZpXumvCXvg2TSSEojAD2FGpsO4Mv4GvloJqUovmfdxaautvzqI4eRQWLDkOV/OrCRYbzYb/AIIBjdo8hUDgNbMT10Y/KpR3Ofi0pUW0uT9+Q1+juIrHHI3DO+UCxLA3XmRzDCwue6dOF7qdC9RVHJJXsr8X7fE4OIxVqUqMYuTtd2tor6PVq+z0Wp9DGLjHGRPtL+da3pozmx1V0GJ2tDEjOXVrclZSx5AAXqdKm6s1CJGtVVGDnLZHuyNtCR1jdAjMpdLSJIrAEg6rwNwdPA1bWwzhHMndLR6NFeHxiqTUJKzautU7ryNFEKxnSQyK8JhQBQBQBQBQEcor0izGbzv/AMSizNlh7MlbsVRnza5iGXULra45dbHpYVfpNwXxX14u1vB8e442Nf66jUdo201sr346rh3nO72Jl7HvI8gzNkcFBdPd9tw3X4WqrGqKq/Dy18SzAOcqN5vi7PXVcB18S/7CT1h/9lZTU0VOMxDmT/kSWVRzi94m/wDafuisOKd5JHTwKtTb5v6f7MRsmZhjcYMhuwTuEx3IF/3+V+V/aqEF8COphpWqS05fctMQ7Otuye+i2vFluCSL9/hlFh/Ca9sblJptW7+H55/UU2Vg85kaWNyy2shfKGvm4FW6hRc82HE2B14PDxqyebZe/wBzl9NdI1cLCKp6OT3dtkvu7K7+ugvvFCI3QIMqsgYrcmxuQVvc9Bz435WrRjcRKCVGOit7XvzM/QWGhVUsZUWabk7N7eK7+HJW+HursMrXJXlqVtqR1FZMLiXQndbcUdjpHBQx1Lq5vVaxfJ/h8V5rVDU8vdBABsbgkXtfp8fvrV0lhlmWIhtJa/Z+f4OL0BjJRcsHV3je3luvLh3XFuwJGYmwPXib/nXLPpyy2tiFkwUrN3O6oAGgLRhQBfxKjTxqS3MeJilRkn3/AFuvwebjY0rAFYAqJDbkQLg6HlqzG4sQSdak8U6clFpNJ3V1s+aOE8FGrFzUnFtWdna65P14WZ9SSMdB6Vve5yFojnH7OSaNo20B5jiCDcGrKNV0pqaI1qKrU3CXEg2Ju72UomeTOwUIgC5VUBQvU62HzPG9XV8X1kMkVZXu9b95ThsD1dTrJSu0rLSyS2NREKwnVRNXhIKAKAKAKAKA5cUPGJ4iMHQgEeIvUk2tiqST3FpBXqINCzivStlVa4nP74A/uKt/neubXd5yOxhllpxXn6s+Z7TxKYfaRklF0dSp0va50NudiBSlrGxrhUVOspPire/Q0MeJRl7SGzR21I9k2OvA8dORuCKnGMnJRitWdGdWmqXWSlotb+BUI7u5dWZVU2JDEN1yAixAtpfqRWzHYj+Wp9RS83zb9/Y5eAwv80/5zEq7l2IvZR2vbm+HrxVksfISdSWNySSbnXQXP9cKx1JucszST7jr4agqFNU4ttLn4/Y9hmDDI+lvZN9R4qev31AuAqVNnYMraA8PIEcjXXw2M6yTpVezLRcl3e+J810h0X1FKNfDXzwbbd7uWt7vvXzV1yJdn7MMpszAKpN+ZsACSByvew8a59ai6VRwfD6HZw2MWIoKrBb8O/l5P5akO+E4igjw68GJZgfaXJb7yb38PHSuCKMfO0FHn9ETbtR2w6eOY+prJXd5sqw6tBH1bZs3aRo/1lBPnz+d669OWaCkfPVqeSpKPJj8YqZ4huIVEsQ3GKiWo7oehQBQBQBQBQHhoCGSMmvSDQu+Gbp8xXtyDgyB8E/T5ivbog6civwmyZRGQy6s8rHVeDm451gdKbv4s6aqQVlySXoYXfXcTGzurwwhjwPfjX72HSlKlOLdyVSrCSVit2LuLtWMOrRWQi+TtYSC2mvtacK6GFcac3OW6WniZK8p1YKgpWjJrN3K+r5+hapuztJcOi/qYzB2zKJorlTrnJJsGJJ014DyrnToznVUn4+Z210lSWqWmyXKK0XorKxFLuVtBhYQBeZvJFf5Man1UjR/+hh/8vkyODcTHZ1zQDKCL9+I6A3Omb4U6uR4+kMPbtfJ/gnxW4OOuVVFKXuLuot4cadXILpGhz+THdlbpY1bo8QyniweO5y8Pe4HQkeA6VuxElWpRb7a0fejjYWdPC4moof0n8S7nxVt+aXcl3md3h3E2piJzIMMALBAe1h1C37xGfS9ybVkUGieJrwqTuttjRYfczFpGiiMGygEZ00t8axyw9Ru9jRDE0krXNVu7sueOLJIliGa3eU6HXkepNbsMpQhlkcvGJTq5oFwmGbp8xV9yhQYxHEa8JqJOorwkj2h6FAFAQ4vECNC5vYcbW8uegHUmwA1OlAV2I3gSMXZHAJUA3iIJZGcWs+uinhxNrXoCWXbSDtLK7dnnuBl17PLmIuw0u1vNW6UB621lCSvkf6K+cfR5u7ctpn00F9bXBBF70BDLvDEpIYODppYa3d4yBY2OUxm/gV6igJ8PtZHIFiLp2lyYyMoJF+6xvw5XtcXtegI125HmRCrAubAExkj2eKhifeB0Gg1NhrQEX/2WC6+0My5rnKLC8gNwWvp2TXNrDSgJ4dtRucqKz6v7OUiyNkZr31F7cLk30FAN4HFCVA6iwN+angbcVJHzoCegCgCgCgCgCgCgCgCgCgCgCgCgCgOJYwwIN7HoSp+BBuKAWOzIiAuTQWtq2llKDW975WIv4340ADZcNycguylDx1BJJvrqSSdeNAdnAxntLgntBle7Mbg5u6LnQd5tBbjQHL7NiNwUBzceP1zJx5d43oD2PZ8YKmzHLe2Z5HAuCL2ZiL2JF+NjbhQEQ2PDbLk08Wcnhl9om/s93y04UBKmzohnsgGfLmtcA5SSNOA1JOnWgOf/i4r5spBuxuGcHvNmYGx1BOpHDQdKAnw+HVBZb8bm5ZiT1LEkn49KAloAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoD/2Q=="
              alt="brain"
              className="brain" />
            <h2>Body Donation Directory</h2>
            <p>
              Do you know that in India you can donate your whole body after death for medical research and education?
              Click below for information on organisations and medical institutions in your area where you can donate a body.
            </p>
            <button className="details-btn"   onClick={handleBodyclick} >Details</button>
          </div>

        </div>


      </div>
    </div>
  
   
      </>


    
  );
};

export default AboutSection;