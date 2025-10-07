import VideoCarousel from "../../components/video-carousel/video-carousel";
import VideoRow from "../../components/video-row/video-row";
import styles from "./apresentation.module.css";

export default function Apresentation2() {
  return (
    <div className={`${styles.apresentation}`}>
      <div className={styles.apresentationContainer}>
        <svg
          className={styles.apresentationSvgLarge}
          viewBox="0 0 1000 900"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 0 714 C 33 742 94 741 141 811 C 163 869 244 879 371 853 C 503 824 553 816 643 842 C 794 912 889 873 916 853 C 947 835 967 818 1000 810 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 748 790 C 679 767 625 732 448 750 C 207 796 128 690 110 665 C 26 545 23 417 16 350 C 8 257 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 16 661 C 33 742 94 741 158 767 C 131 859 254 827 364 816 C 534 790 558 806 678 801 C 810 846 889 873 913 807 C 947 835 947 807 1000 697 L 1000 593 C 978 692 951 743 903 774 C 869 793 796 812 748 790 C 706 726 652 685 446 744 C 275 776 160 727 124 663 C 49 535 44 482 28 411 C 13 322 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 714 C 33 742 51 789 85 818 C 131 859 274 836 465 809 C 586 779 672 805 712 822 C 789 852 857 850 871 856 C 908 871 954 828 1000 840 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 753 764 C 739 745 688 659 460 740 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 2 144 0 51 0 0 L 0 0 L 0 0 Z
            "
            fill="#ff7700"
          />
          <path
            d="
              M 0 714 C 33 742 94 741 112 803 C 131 859 198 875 325 851 C 508 814 558 806 643 842 C 794 912 889 873 916 853 C 947 835 967 818 1000 810 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 748 790 C 706 726 652 685 446 732 C 207 796 128 690 110 665 C 26 545 23 417 16 350 C 8 257 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#4ECDC4"
          />
          <path
            d="
              M 0 714 C 33 742 51 789 85 818 C 131 859 285 857 472 813 C 591 788 645 812 691 826 C 769 861 855 873 867 830 C 931 829 956 753 1000 772 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 753 764 C 739 745 688 659 460 740 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 2 144 0 51 0 0 L 0 0 L 0 0 Z
            "
            fill="#ff7700"
          />
          <path
            d="
              M 0 615 C 27 652 53 739 79 780 C 131 867 274 836 461 784 C 601 749 673 793 823 823 C 789 852 863 870 926 821 C 931 818 961 776 1000 791 L 1000 625 C 983 695 959 741 916 777 C 870 807 786 821 746 784 C 716 761 694 671 476 739 C 207 796 96 728 41 653 C 26 545 18 414 0 351 C 0 210 0 167 0 129 L 0 141 L 0 168 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 594 C 27 652 58 732 82 777 C 131 859 274 836 465 809 C 586 779 672 805 705 827 C 764 857 799 861 855 857 C 938 836 956 753 1000 772 L 1000 625 C 983 695 959 741 916 777 C 870 807 786 821 746 784 C 716 761 694 671 476 739 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 7 210 3 167 0 129 L 0 141 L 0 168 Z
            "
            fill="#1eb483"
          />
        </svg>
        <svg
          className={styles.apresentationSvgSmall}
          viewBox="0 0 750 925"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 0 714 C 33 742 94 741 141 811 C 163 869 244 879 371 853 C 503 824 553 816 643 842 C 794 912 889 873 916 853 C 947 835 967 818 1000 810 L 1000 625 C 983 695 959 741 916 777 C 890 793 846 802 860 793 C 748 777 741 648 526 719 C 207 796 128 690 110 665 C 26 545 23 417 16 350 C 8 257 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 668 C 33 742 94 741 158 767 C 131 859 254 827 364 816 C 534 790 558 806 678 801 C 810 846 889 873 913 807 C 947 835 947 807 1000 697 L 1000 593 C 978 692 951 743 903 774 C 869 793 796 812 748 790 C 706 726 652 685 446 744 C 275 776 220 802 0 660 C 0 553 0 491 0 429 C 0 323 0 210 0 0 L 0 134 L 0 266 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 714 C 33 742 51 789 85 818 C 131 859 274 836 465 809 C 586 779 672 805 712 822 C 789 852 857 850 871 856 C 908 871 954 828 1000 840 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 753 764 C 739 745 688 659 460 740 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 2 144 0 51 0 0 L 0 0 L 0 0 Z
            "
            fill="#ff7700"
          />
          <path
            d="
              M 0 714 C 33 742 94 741 112 803 C 131 859 198 875 325 851 C 508 814 558 806 643 842 C 794 912 889 873 916 853 C 947 835 967 818 1000 810 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 748 790 C 706 726 652 685 446 732 C 207 796 128 690 110 665 C 26 545 23 417 16 350 C 8 257 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#4ECDC4"
          />
          <path
            d="
              M 0 714 C 33 742 51 789 85 818 C 131 859 285 857 472 813 C 591 788 645 812 691 826 C 769 861 855 873 867 830 C 931 829 956 753 1000 772 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 753 764 C 739 745 688 659 460 740 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 2 144 0 51 0 0 L 0 0 L 0 0 Z
            "
            fill="#ff7700"
          />
          <path
            d="
              M 0 615 C 27 652 53 739 79 780 C 131 867 274 836 461 784 C 601 749 673 793 823 823 C 789 852 863 870 926 821 C 931 818 961 776 1000 791 L 1000 625 C 983 695 959 741 916 777 C 870 807 786 821 746 784 C 716 761 694 671 476 739 C 207 796 96 728 41 653 C 26 545 18 414 0 351 C 0 210 0 167 0 129 L 0 141 L 0 168 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 594 C 27 652 58 732 82 777 C 131 859 274 836 465 809 C 586 779 672 805 705 827 C 764 857 799 861 855 857 C 938 836 956 753 1000 772 L 1000 625 C 983 695 959 741 916 777 C 870 807 786 821 746 784 C 716 761 694 671 476 739 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 7 210 3 167 0 129 L 0 141 L 0 168 Z
            "
            fill="#1eb483"
          />
        </svg>
        <svg
          className={styles.apresentationSvgVerySmall}
          viewBox="0 0 450 925"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 0 714 C 33 742 94 741 141 811 C 163 869 244 879 371 853 C 503 824 553 816 643 842 C 794 912 889 873 916 853 C 947 835 967 818 1000 810 L 1000 625 C 983 695 959 741 916 777 C 890 793 846 802 860 793 C 748 777 741 648 523 713 C 207 796 128 690 110 665 C 26 545 23 417 16 350 C 8 257 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 668 C 33 742 94 741 158 767 C 131 859 254 827 364 816 C 534 790 558 806 678 801 C 810 846 889 873 913 807 C 947 835 947 807 1000 697 L 1000 593 C 978 692 951 743 903 774 C 869 793 796 812 748 790 C 706 726 652 685 446 744 C 275 776 220 802 0 660 C 0 553 0 491 0 429 C 0 323 0 210 0 0 L 0 134 L 0 266 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 714 C 33 742 51 789 85 818 C 131 859 274 836 465 809 C 586 779 672 805 712 822 C 789 852 857 850 871 856 C 908 871 954 828 1000 840 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 753 764 C 739 745 688 659 460 740 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 2 144 0 51 0 0 L 0 0 L 0 0 Z
            "
            fill="#ff7700"
          />
          <path
            d="
              M 0 714 C 33 742 94 741 112 803 C 131 859 198 875 325 851 C 508 814 558 806 643 842 C 794 912 889 873 916 853 C 947 835 967 818 1000 810 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 748 790 C 706 726 652 685 446 732 C 207 796 128 690 110 665 C 26 545 23 417 16 350 C 8 257 2 210 0 0 L 0 133 L 0 180 Z
            "
            fill="#4ECDC4"
          />
          <path
            d="
              M 0 714 C 33 742 51 789 85 818 C 131 859 285 857 472 813 C 591 788 645 812 691 826 C 769 861 855 873 867 830 C 931 829 956 753 1000 772 L 1000 625 C 983 695 959 741 916 777 C 890 793 796 812 753 764 C 739 745 688 659 460 740 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 2 144 0 51 0 0 L 0 0 L 0 0 Z
            "
            fill="#ff7700"
          />
          <path
            d="
              M 0 615 C 27 652 53 739 79 780 C 131 867 274 836 461 784 C 601 749 673 793 823 823 C 789 852 863 870 926 821 C 931 818 961 776 1000 791 L 1000 625 C 983 695 959 741 916 777 C 870 807 786 821 746 784 C 716 761 694 671 476 739 C 207 796 96 728 41 653 C 26 545 18 414 0 351 C 0 210 0 167 0 129 L 0 141 L 0 168 Z
            "
            fill="#800100"
          />
          <path
            d="
              M 0 594 C 27 652 58 732 82 777 C 131 859 274 836 465 809 C 586 779 672 805 705 827 C 764 857 799 861 855 857 C 938 836 956 753 1000 772 L 1000 625 C 983 695 959 741 916 777 C 870 807 786 821 746 784 C 716 761 694 671 476 739 C 207 796 96 728 68 653 C 26 545 18 414 13 298 C 7 210 3 167 0 129 L 0 141 L 0 168 Z
            "
            fill="#1eb483"
          />
        </svg>
      </div>
      <div className={styles.apresentationCardContent}>
        <h1 className={`${styles.apresentationTitle} title-section`}>
          A vida precisa de movimento <br />
          mexa-se!
        </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis placeat sequi, saepe dolore labore quaerat consequuntur repellat voluptas natus rem aspernatur. Omnis est iure similique unde ipsa! Consequatur, alias!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis soluta suscipit quidem cumque quam, nulla voluptas repellat maiores aliquam alias eveniet dolor delectus est a deleniti consequuntur culpa cupiditate magnam?
          </p>
        </div>
        {/*
        <div className={styles.textApresentation}>
          <div>
            <p>
              Olá e bem-vinda(o) ao nosso cantinho dedicado ao Samba de
              Gafieira! Aqui, a gente acredita que a vida é muito mais gostosa
              quando está em movimento. E qual é o melhor jeito de se mexer se
              não dançando um bom samba?
            </p>
            <p>
              Quando dançamos, somos levados a prestar atenção em como nosso
              corpo se movimenta, em cada gesto e em cada respiração. Essa
              conexão nos permite conhecer melhor nossas limitações e
              potencialidades, revelando uma nova forma de ver e sentir a nós
              mesmos.
            </p>
          </div>
          <div>
            <p>
              Além disso, a dança é uma forma de despertar sua vitalidade,
              melhorar seu humor e liberar tensões. Ao se permitir dançar, você
              está cuidando do corpo e da mente, encontrando alegria e liberdade
              em cada movimento. O samba de gafieira é um convite para se mexer,
              sentir e viver com mais intensidade.
            </p>
            <p>
              Então, bora lá? A vida não espera, e o Samba de Gafieira está aqui
              para transformar o seu jeito de viver e movimentar. Venha sacudir
              a poeira e dar aquele gingado, porque a vida é muito curta para a
              gente ficar parada(o)!
            </p>
          </div>
        </div>
        <div className={styles.videoApresentation}>
          <VideoRow />
        </div>
        */}
      </div>
    </div>
  );
}
