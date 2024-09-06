import React, { Component, createRef } from 'react';
import './Progress.css';

class Progress extends Component {
  // إنشاء مرجع للإشارة إلى قسم المهارات
  skillsRef = createRef();

  componentDidMount() {
    // إضافة حدث التمرير عند تحميل المكون
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // إزالة الحدث عند إلغاء تحميل المكون لتجنب تسرب الذاكرة
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const ourSkills = this.skillsRef.current;

    // التأكد من وجود العنصر قبل متابعة التحقق
    if (!ourSkills) return;

    // حساب الموضع والارتفاعات اللازمة
    const skillsOffsetTop = ourSkills.offsetTop;
    const skillsOuterHeight = ourSkills.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // شرط التحقق إذا وصل التمرير إلى جزء المهارات
    if (scrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
      // اختيار كل العناصر المراد تلوينها
      const allSkills = document.querySelectorAll(".our-skills .skill .the-progress span");
      
      // تغيير عرض العناصر بناءً على قيمة data-progress
      allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
      });
    }
  };

  render() {
    return (
      <div className="our-skills" ref={this.skillsRef}>
        <h2 className="main-title">Our Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
          est. Doloremque sapiente veritatis laboriosam corrupti optio et
          maxime. Ad, amet explicabo eaque labore cupiditate quasi nostrum
          nemo recusandae id quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque ab, dolores pariatur cum
          exercitationem, illo nisi veritatis vitae ea deleniti fugiat
          quisquam tempora, accusantium corrupti excepturi optio. Inventore,
          cupiditate recusandae.</p>
        <div className="container">
          <div className="foucs">
            <p style={{}} > My Foucs </p>
            <p> UI/UX</p>
           <p> BACK </p>
           <p> AL </p>

          </div>
          <div className="skills">
            <div className="skill">
              <h3>HTML</h3>
              <div className="the-progress">
                <span data-progress="80%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>CSS</h3>
              <div className="the-progress">
                <span data-progress="85%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>JavaScript</h3>
              <div className="the-progress">
                <span data-progress="70%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>Python</h3>
              <div className="the-progress">
                <span data-progress="80%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
