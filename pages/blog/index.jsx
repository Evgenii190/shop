import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Order from "../../components/Order/Order";
import PagePatternLayout from "../../layouts/PagePatternLayout";
import styles from "../../styles/blog.module.css";
import classNames from "classnames";
import Link from "next/link";

const BlogPage = () => {
    return (
        <PagePatternLayout
            pageTitle={"Блог"}
            pageText={
                <>
                    <span>Интересные статьи о производстве,</span> <br />
                    монтажу и обслуживании каминов и барбекю
                </>
            }
            isDots={true}
            srcImage={"/images/blog-bg.png"}
        >
            <section className={styles.blog__jobs}>
                <div className="container">
                    <div className={styles.blog__jobs_inner}>
                        <div className={styles.blog__tabs}>
                            <div
                                className={classNames(
                                    styles.blog__tab,
                                    styles.blog__tab__active
                                )}
                            >
                                Изготовление камина
                            </div>
                            <div className={styles.blog__tab}>
                                Изготовление камина
                            </div>
                            <div className={styles.blog__tab}>
                                Изготовление камина
                            </div>
                            <div className={styles.blog__tab}>
                                Изготовление камина
                            </div>
                            <div className={styles.blog__tab}>
                                Изготовление камина
                            </div>
                            <div className={styles.blog__tab}>
                                Изготовление камина
                            </div>
                        </div>
                        <div className={styles.blog_page__items}>
                            <div className={styles.blog__item}>
                                <img src="/images/blogImg1.png" alt="" />
                                <h4 className={styles.blog__item_title}>
                                    Производство портала из мраморас печкой
                                    Gifest 2043
                                </h4>
                                <p className={styles.blog__item_text}>
                                    Производство портала из мрамора с печкой
                                    Gifest 2043Vs Производство портала из
                                    мрамора
                                </p>
                                <Link href="/post">
                                    <a>
                                        <button
                                            className={styles.blog__item_btn}
                                        >
                                            <p>Подробнее</p>
                                            <div
                                                className={
                                                    styles.blog__btn_arrow
                                                }
                                            >
                                                <img
                                                    src="/images/blog-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.blog__item}>
                                <img src="/images/blogImg2.png" alt="" />
                                <h4 className={styles.blog__item_title}>
                                    Производство портала из мраморас печкой
                                    Gifest 2043
                                </h4>
                                <p className={styles.blog__item_text}>
                                    Производство портала из мрамора с печкой
                                    Gifest 2043Vs Производство портала из
                                    мрамора
                                </p>
                                <Link href="/post">
                                    <a>
                                        <button
                                            className={styles.blog__item_btn}
                                        >
                                            <p>Подробнее</p>
                                            <div
                                                className={
                                                    styles.blog__btn_arrow
                                                }
                                            >
                                                <img
                                                    src="/images/blog-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.blog__item}>
                                <img src="/images/blogImg3.png" alt="" />
                                <h4 className={styles.blog__item_title}>
                                    Производство портала из мраморас печкой
                                    Gifest 2043
                                </h4>
                                <p className={styles.blog__item_text}>
                                    Производство портала из мрамора с печкой
                                    Gifest 2043Vs Производство портала из
                                    мрамора
                                </p>
                                <Link href="/post">
                                    <a>
                                        <button
                                            className={styles.blog__item_btn}
                                        >
                                            <p>Подробнее</p>
                                            <div
                                                className={
                                                    styles.blog__btn_arrow
                                                }
                                            >
                                                <img
                                                    src="/images/blog-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.blog__item}>
                                <img src="/images/blogImg1.png" alt="" />
                                <h4 className={styles.blog__item_title}>
                                    Производство портала из мраморас печкой
                                    Gifest 2043
                                </h4>
                                <p className={styles.blog__item_text}>
                                    Производство портала из мрамора с печкой
                                    Gifest 2043Vs Производство портала из
                                    мрамора
                                </p>
                                <Link href="/post">
                                    <a>
                                        <button
                                            className={styles.blog__item_btn}
                                        >
                                            <p>Подробнее</p>
                                            <div
                                                className={
                                                    styles.blog__btn_arrow
                                                }
                                            >
                                                <img
                                                    src="/images/blog-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.blog__item}>
                                <img src="/images/blogImg2.png" alt="" />
                                <h4 className={styles.blog__item_title}>
                                    Производство портала из мраморас печкой
                                    Gifest 2043
                                </h4>
                                <p className={styles.blog__item_text}>
                                    Производство портала из мрамора с печкой
                                    Gifest 2043Vs Производство портала из
                                    мрамора
                                </p>
                                <Link href="/post">
                                    <a>
                                        <button
                                            className={styles.blog__item_btn}
                                        >
                                            <p>Подробнее</p>
                                            <div
                                                className={
                                                    styles.blog__btn_arrow
                                                }
                                            >
                                                <img
                                                    src="/images/blog-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.blog__item}>
                                <img src="/images/blogImg3.png" alt="" />
                                <h4 className={styles.blog__item_title}>
                                    Производство портала из мраморас печкой
                                    Gifest 2043
                                </h4>
                                <p className={styles.blog__item_text}>
                                    Производство портала из мрамора с печкой
                                    Gifest 2043Vs Производство портала из
                                    мрамора
                                </p>
                                <Link href="/post">
                                    <a>
                                        <button
                                            className={styles.blog__item_btn}
                                        >
                                            <p>Подробнее</p>
                                            <div
                                                className={
                                                    styles.blog__btn_arrow
                                                }
                                            >
                                                <img
                                                    src="/images/blog-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Order />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export default BlogPage;
